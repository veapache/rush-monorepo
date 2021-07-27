import { createUser, updateUsername, getUsers, deleteUser } from './prisma_tests_funs';
import { prismaMock } from './prisma_test/singleton';

test('should create new user ', async () => {
  const user = {
    id: 54,
    name: 'Rich',
    email: 'rich@prisma.io',
  };

  prismaMock.user.create.mockResolvedValue(user);

  await expect(createUser(user)).resolves.toEqual({
    id: 54,
    name: 'Rich',
    email: 'rich@prisma.io',
  });
});

test('should update a users name ', async () => {
  const user = {
    id: 54,
    name: 'Rich Haines',
    email: 'rich@prisma.io',
  };

  prismaMock.user.update.mockResolvedValue(user);

  await expect(updateUsername(user)).resolves.toEqual({
    id: 54,
    name: 'Rich Haines',
    email: 'rich@prisma.io',
  });
});

test('should show users', async () => {
  await expect(getUsers()).resolves.toEqual([
    {
      id: 54,
      name: 'Rich Haines',
      email: 'rich@prisma.io',
    },
  ]);
});

test('should delete', async () => {
  await expect(deleteUser(54)).resolves.toEqual({
    id: 54,
    name: 'Rich Haines',
    email: 'rich@prisma.io',
  });
});
