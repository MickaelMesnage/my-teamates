/*
  Warnings:

  - You are about to drop the `UserTeam` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserTeam" DROP CONSTRAINT "UserTeam_teamId_fkey";

-- DropForeignKey
ALTER TABLE "UserTeam" DROP CONSTRAINT "UserTeam_userId_fkey";

-- DropTable
DROP TABLE "UserTeam";

-- CreateTable
CREATE TABLE "_UserTeams" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserTeams_AB_unique" ON "_UserTeams"("A", "B");

-- CreateIndex
CREATE INDEX "_UserTeams_B_index" ON "_UserTeams"("B");

-- AddForeignKey
ALTER TABLE "_UserTeams" ADD CONSTRAINT "_UserTeams_A_fkey" FOREIGN KEY ("A") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserTeams" ADD CONSTRAINT "_UserTeams_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
