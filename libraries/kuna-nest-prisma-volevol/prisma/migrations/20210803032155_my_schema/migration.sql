/*
  Warnings:

  - You are about to drop the column `authorId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `viewCount` on the `Post` table. All the data in the column will be lost.
  - Added the required column `autoId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "authorId",
DROP COLUMN "content",
DROP COLUMN "createdAt",
DROP COLUMN "published",
DROP COLUMN "title",
DROP COLUMN "updatedAt",
DROP COLUMN "viewCount",
ADD COLUMN     "address" TEXT NOT NULL DEFAULT E'none',
ADD COLUMN     "autoId" TEXT NOT NULL,
ADD COLUMN     "delivery" TEXT NOT NULL DEFAULT E'pick up',
ADD COLUMN     "payment" TEXT NOT NULL DEFAULT E'cash',
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Auto" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "fuelLiter" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("autoId") REFERENCES "Auto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
