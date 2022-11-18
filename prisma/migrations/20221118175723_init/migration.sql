/*
  Warnings:

  - The primary key for the `Lawyer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `Lawyer` table. All the data in the column will be lost.
  - The `rating` column on the `Lawyer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `LawyerOffice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uuid` on the `LawyerOffice` table. All the data in the column will be lost.
  - The primary key for the `LawyerReview` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uuid` on the `LawyerReview` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uuid` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[lawyerOfficeId]` on the table `Lawyer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Lawyer" DROP CONSTRAINT "Lawyer_lawyerOfficeId_fkey";

-- DropForeignKey
ALTER TABLE "Lawyer" DROP CONSTRAINT "Lawyer_user_id_fkey";

-- DropForeignKey
ALTER TABLE "LawyerReview" DROP CONSTRAINT "LawyerReview_byId_fkey";

-- DropForeignKey
ALTER TABLE "LawyerReview" DROP CONSTRAINT "LawyerReview_lawyerId_fkey";

-- DropIndex
DROP INDEX "Lawyer_user_id_key";

-- DropIndex
DROP INDEX "LawyerOffice_uuid_key";

-- DropIndex
DROP INDEX "LawyerReview_uuid_key";

-- DropIndex
DROP INDEX "User_uuid_key";

-- AlterTable
ALTER TABLE "Lawyer" DROP CONSTRAINT "Lawyer_pkey",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
DROP COLUMN "rating",
ADD COLUMN     "rating" INTEGER NOT NULL DEFAULT 0,
ADD CONSTRAINT "Lawyer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Lawyer_id_seq";

-- AlterTable
ALTER TABLE "LawyerOffice" DROP CONSTRAINT "LawyerOffice_pkey",
DROP COLUMN "uuid",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "LawyerOffice_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "LawyerOffice_id_seq";

-- AlterTable
ALTER TABLE "LawyerReview" DROP CONSTRAINT "LawyerReview_pkey",
DROP COLUMN "uuid",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "LawyerReview_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "LawyerReview_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "uuid",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Lawyer_lawyerOfficeId_key" ON "Lawyer"("lawyerOfficeId");

-- AddForeignKey
ALTER TABLE "Lawyer" ADD CONSTRAINT "Lawyer_lawyerOfficeId_fkey" FOREIGN KEY ("lawyerOfficeId") REFERENCES "LawyerOffice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LawyerReview" ADD CONSTRAINT "LawyerReview_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "Lawyer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LawyerReview" ADD CONSTRAINT "LawyerReview_byId_fkey" FOREIGN KEY ("byId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
