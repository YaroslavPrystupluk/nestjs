/*
  Warnings:

  - You are about to alter the column `rating` on the `movies` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(3,1)`.
  - You are about to alter the column `rating` on the `reviews` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(3,1)`.

*/
-- AlterTable
ALTER TABLE "movies" ALTER COLUMN "rating" SET DATA TYPE DECIMAL(3,1);

-- AlterTable
ALTER TABLE "reviews" ALTER COLUMN "rating" SET DATA TYPE DECIMAL(3,1);
