/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL DEFAULT E'';

-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "cost" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "model" SET DEFAULT E'',
ALTER COLUMN "year" SET DEFAULT 2021;

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "autoId" TEXT NOT NULL,
    "delivery" TEXT NOT NULL DEFAULT E'pick up',
    "payment" TEXT NOT NULL DEFAULT E'cash',
    "address" TEXT NOT NULL DEFAULT E'none',

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
