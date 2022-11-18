/*
  Warnings:

  - You are about to drop the column `bio` on the `Lawyer` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Lawyer` table. All the data in the column will be lost.
  - You are about to drop the column `profilePicture` on the `Lawyer` table. All the data in the column will be lost.
  - You are about to drop the column `uuid` on the `Lawyer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `Lawyer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `Lawyer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LawyerReview" DROP CONSTRAINT "LawyerReview_lawyerId_fkey";

-- DropIndex
DROP INDEX "Lawyer_uuid_key";

-- AlterTable
ALTER TABLE "Lawyer" DROP COLUMN "bio",
DROP COLUMN "name",
DROP COLUMN "profilePicture",
DROP COLUMN "uuid",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "profilePicture" TEXT NOT NULL DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Sin_cara.png',
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'GEN_USER';

-- CreateIndex
CREATE UNIQUE INDEX "Lawyer_user_id_key" ON "Lawyer"("user_id");

-- AddForeignKey
ALTER TABLE "Lawyer" ADD CONSTRAINT "Lawyer_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LawyerReview" ADD CONSTRAINT "LawyerReview_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "Lawyer"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
