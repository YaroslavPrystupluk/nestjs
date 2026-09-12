/*
  Warnings:

  - You are about to drop the column `movieId` on the `movie_posters` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "movies" DROP CONSTRAINT "movies_poster_id_fkey";

-- AlterTable
ALTER TABLE "movie_posters" DROP COLUMN "movieId";

-- AlterTable
ALTER TABLE "movies" ALTER COLUMN "poster_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_poster_id_fkey" FOREIGN KEY ("poster_id") REFERENCES "movie_posters"("id") ON DELETE SET NULL ON UPDATE CASCADE;
