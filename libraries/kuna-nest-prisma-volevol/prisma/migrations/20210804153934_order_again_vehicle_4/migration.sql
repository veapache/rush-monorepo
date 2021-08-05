/*
  Warnings:

  - You are about to drop the column `brand` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `Order` table. All the data in the column will be lost.
  - Added the required column `one` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `two` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "brand",
DROP COLUMN "model",
ADD COLUMN     "one" TEXT NOT NULL,
ADD COLUMN     "two" TEXT NOT NULL;
