/*
  Warnings:

  - You are about to drop the `_TeamToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `adminId` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_TeamToUser" DROP CONSTRAINT "_TeamToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_TeamToUser" DROP CONSTRAINT "_TeamToUser_B_fkey";

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "adminId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_TeamToUser";

-- CreateTable
CREATE TABLE "_UsersTeams" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UsersTeams_AB_unique" ON "_UsersTeams"("A", "B");

-- CreateIndex
CREATE INDEX "_UsersTeams_B_index" ON "_UsersTeams"("B");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UsersTeams" ADD CONSTRAINT "_UsersTeams_A_fkey" FOREIGN KEY ("A") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UsersTeams" ADD CONSTRAINT "_UsersTeams_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
