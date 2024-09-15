/*
  Warnings:

  - You are about to drop the column `eat` on the `Quotes` table. All the data in the column will be lost.
  - You are about to drop the column `sat` on the `Quotes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Quotes" DROP COLUMN "eat";
ALTER TABLE "Quotes" DROP COLUMN "sat";
ALTER TABLE "Quotes" ADD COLUMN     "timestamps" STRING;
