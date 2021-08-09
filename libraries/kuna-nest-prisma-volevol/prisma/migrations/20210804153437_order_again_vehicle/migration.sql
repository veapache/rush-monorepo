/*
  Warnings:

  - You are about to drop the column `address` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `autoId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `delivery` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `payment` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Order` table. All the data in the column will be lost.
  - Added the required column `brand` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "address",
DROP COLUMN "autoId",
DROP COLUMN "delivery",
DROP COLUMN "payment",
DROP COLUMN "userId",
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "cost" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL DEFAULT 2021;
