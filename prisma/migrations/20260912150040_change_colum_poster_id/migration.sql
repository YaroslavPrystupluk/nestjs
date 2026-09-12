/*
  Warnings:

  - You are about to drop the column `posterId` on the `movies` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[poster_id]` on the table `movies` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `poster_id` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "movies" DROP CONSTRAINT "movies_posterId_fkey";

-- DropIndex
DROP INDEX "movies_posterId_key";

-- AlterTable
ALTER TABLE "movies" DROP COLUMN "posterId",
ADD COLUMN     "poster_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "movies_poster_id_key" ON "movies"("poster_id");

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_poster_id_fkey" FOREIGN KEY ("poster_id") REFERENCES "movie_posters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
