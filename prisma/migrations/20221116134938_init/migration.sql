/*
  Warnings:

  - You are about to drop the column `bio` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "bio";

-- CreateTable
CREATE TABLE "LawyerOffice" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zip" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LawyerOffice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lawyer" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT,
    "experience" TEXT,
    "rating" TEXT NOT NULL,
    "videoConsultationFee" INTEGER,
    "officeConsultationFee" INTEGER,
    "verified" BOOLEAN,
    "profilePicture" TEXT NOT NULL,
    "qualification" TEXT,
    "bio" TEXT NOT NULL,
    "lawyerOfficeId" TEXT NOT NULL,

    CONSTRAINT "Lawyer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LawyerReview" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "lawyerId" TEXT NOT NULL,
    "byId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LawyerReview_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LawyerOffice_uuid_key" ON "LawyerOffice"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Lawyer_uuid_key" ON "Lawyer"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "LawyerReview_uuid_key" ON "LawyerReview"("uuid");

-- AddForeignKey
ALTER TABLE "Lawyer" ADD CONSTRAINT "Lawyer_lawyerOfficeId_fkey" FOREIGN KEY ("lawyerOfficeId") REFERENCES "LawyerOffice"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LawyerReview" ADD CONSTRAINT "LawyerReview_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "Lawyer"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LawyerReview" ADD CONSTRAINT "LawyerReview_byId_fkey" FOREIGN KEY ("byId") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
