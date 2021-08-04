/*
  Warnings:

  - You are about to drop the column `year` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "year",
ADD COLUMN     "delivery" INTEGER NOT NULL DEFAULT 0;
