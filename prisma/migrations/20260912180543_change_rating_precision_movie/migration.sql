/*
  Warnings:

  - You are about to alter the column `rating` on the `movies` table. The data in that column could be lost. The data in that column will be cast from `Decimal(3,1)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "movies" ALTER COLUMN "rating" SET DATA TYPE DOUBLE PRECISION;
