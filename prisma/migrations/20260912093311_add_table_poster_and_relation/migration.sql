/*
  Warnings:

  - A unique constraint covering the columns `[posterId]` on the table `movies` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `posterId` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movies" ADD COLUMN     "posterId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "movie_posters" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "movieId" TEXT NOT NULL,

    CONSTRAINT "movie_posters_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "movies_posterId_key" ON "movies"("posterId");

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_posterId_fkey" FOREIGN KEY ("posterId") REFERENCES "movie_posters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
