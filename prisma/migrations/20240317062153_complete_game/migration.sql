/*
  Warnings:

  - Added the required column `data` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nbPLayers` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "data" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "nbPLayers" INTEGER NOT NULL,
ADD COLUMN     "place" TEXT;
