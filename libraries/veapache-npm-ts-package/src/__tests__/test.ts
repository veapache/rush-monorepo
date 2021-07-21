import { multiplyTwoNumbers } from '..';

test('Multiplication of integers: 2 and 21', () => {
  expect(multiplyTwoNumbers(2, 21)).toBe(42);
});

test('Multiplication of integers: 2 and -21', () => {
  expect(multiplyTwoNumbers(2, -21)).toBe(-42);
});
