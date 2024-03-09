/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `Team` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `token` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "token" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Team_token_key" ON "Team"("token");
