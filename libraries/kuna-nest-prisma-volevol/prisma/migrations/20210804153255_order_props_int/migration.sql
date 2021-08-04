/*
  Warnings:

  - You are about to drop the column `brand` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `cost` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Order` table. All the data in the column will be lost.
  - Added the required column `autoId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "brand",
DROP COLUMN "cost",
DROP COLUMN "model",
DROP COLUMN "year",
ADD COLUMN     "address" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "autoId" INTEGER NOT NULL,
ADD COLUMN     "delivery" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "payment" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "userId" INTEGER NOT NULL;
