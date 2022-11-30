-- AlterTable
ALTER TABLE "Lawyer" ADD COLUMN     "profilePicture" TEXT NOT NULL DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Sin_cara.png';

-- AlterTable
ALTER TABLE "Slot" ADD COLUMN     "isAvailable" BOOLEAN NOT NULL DEFAULT true;
