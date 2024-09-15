-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MEMBER');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('English', 'Hindi', 'Tamil', 'Telegu', 'Bengali');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('REVIEW', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "User" (
    "id" STRING NOT NULL,
    "name" STRING,
    "email" STRING NOT NULL,
    "password" STRING NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'MEMBER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contributions" (
    "id" STRING NOT NULL,
    "quoteId" STRING NOT NULL,
    "name" STRING NOT NULL,
    "email" STRING NOT NULL,
    "message" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contributions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quotes" (
    "id" STRING NOT NULL,
    "movie" STRING NOT NULL,
    "quote" STRING NOT NULL,
    "status" "Status" NOT NULL,
    "timestamps" STRING,
    "language" "Language" NOT NULL,
    "year" STRING NOT NULL,
    "userId" STRING,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "contributionsId" STRING,

    CONSTRAINT "Quotes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Quotes" ADD CONSTRAINT "Quotes_contributionsId_fkey" FOREIGN KEY ("contributionsId") REFERENCES "Contributions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
