/*
  Warnings:

  - You are about to drop the column `cost` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "cost",
ADD COLUMN     "payment" INTEGER NOT NULL DEFAULT 0;
