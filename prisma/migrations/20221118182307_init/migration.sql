/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Lawyer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Lawyer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Lawyer` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Lawyer` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Lawyer" DROP CONSTRAINT "Lawyer_lawyerOfficeId_fkey";

-- AlterTable
ALTER TABLE "Lawyer" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'LAWYER',
ALTER COLUMN "verified" SET DEFAULT false,
ALTER COLUMN "lawyerOfficeId" DROP NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Lawyer_email_key" ON "Lawyer"("email");

-- AddForeignKey
ALTER TABLE "Lawyer" ADD CONSTRAINT "Lawyer_lawyerOfficeId_fkey" FOREIGN KEY ("lawyerOfficeId") REFERENCES "LawyerOffice"("id") ON DELETE SET NULL ON UPDATE CASCADE;
