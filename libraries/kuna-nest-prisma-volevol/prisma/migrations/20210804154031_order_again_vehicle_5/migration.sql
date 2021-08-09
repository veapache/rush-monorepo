/*
  Warnings:

  - You are about to drop the column `one` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `two` on the `Order` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vehicleId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "one",
DROP COLUMN "two",
ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "vehicleId" TEXT NOT NULL;
