/*
  Warnings:

  - You are about to drop the `ContactBar` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Footer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Navbar` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NavbarLink` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SocialMediaLink` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "layout";

-- DropForeignKey
ALTER TABLE "kinesiomed"."NavbarLink" DROP CONSTRAINT "NavbarLink_navbarId_fkey";

-- DropForeignKey
ALTER TABLE "kinesiomed"."SocialMediaLink" DROP CONSTRAINT "SocialMediaLink_contactBarId_fkey";

-- DropTable
DROP TABLE "kinesiomed"."ContactBar";

-- DropTable
DROP TABLE "kinesiomed"."Footer";

-- DropTable
DROP TABLE "kinesiomed"."Navbar";

-- DropTable
DROP TABLE "kinesiomed"."NavbarLink";

-- DropTable
DROP TABLE "kinesiomed"."SocialMediaLink";

-- CreateTable
CREATE TABLE "layout"."ContactBar" (
    "id" SERIAL NOT NULL,
    "proyId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactBar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "layout"."SocialMediaLink" (
    "id" SERIAL NOT NULL,
    "proyId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "iconName" TEXT NOT NULL,
    "iconUrl" TEXT,
    "contactBarId" INTEGER,

    CONSTRAINT "SocialMediaLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "layout"."Navbar" (
    "id" SERIAL NOT NULL,
    "proyId" TEXT NOT NULL,
    "logoImage" TEXT NOT NULL,

    CONSTRAINT "Navbar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "layout"."NavbarLink" (
    "id" SERIAL NOT NULL,
    "proyId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "href" TEXT,
    "parentNavbarLinkId" INTEGER,
    "navbarId" INTEGER,

    CONSTRAINT "NavbarLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "layout"."Footer" (
    "id" SERIAL NOT NULL,
    "proyId" TEXT NOT NULL,
    "logoImage" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Footer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContactBar_proyId_key" ON "layout"."ContactBar"("proyId");

-- CreateIndex
CREATE UNIQUE INDEX "SocialMediaLink_proyId_key" ON "layout"."SocialMediaLink"("proyId");

-- CreateIndex
CREATE UNIQUE INDEX "Navbar_proyId_key" ON "layout"."Navbar"("proyId");

-- CreateIndex
CREATE UNIQUE INDEX "NavbarLink_proyId_key" ON "layout"."NavbarLink"("proyId");

-- CreateIndex
CREATE UNIQUE INDEX "Footer_proyId_key" ON "layout"."Footer"("proyId");

-- AddForeignKey
ALTER TABLE "layout"."SocialMediaLink" ADD CONSTRAINT "SocialMediaLink_contactBarId_fkey" FOREIGN KEY ("contactBarId") REFERENCES "layout"."ContactBar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "layout"."NavbarLink" ADD CONSTRAINT "NavbarLink_navbarId_fkey" FOREIGN KEY ("navbarId") REFERENCES "layout"."Navbar"("id") ON DELETE SET NULL ON UPDATE CASCADE;
