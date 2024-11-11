-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "kinesiomed";

-- CreateTable
CREATE TABLE "kinesiomed"."ContactBar" (
    "id" SERIAL NOT NULL,
    "proyId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactBar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kinesiomed"."SocialMediaLink" (
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
CREATE TABLE "kinesiomed"."Navbar" (
    "id" SERIAL NOT NULL,
    "proyId" TEXT NOT NULL,
    "logoImage" TEXT NOT NULL,

    CONSTRAINT "Navbar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kinesiomed"."NavbarLink" (
    "id" SERIAL NOT NULL,
    "proyId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "href" TEXT,
    "parentNavbarLinkId" INTEGER,
    "navbarId" INTEGER,

    CONSTRAINT "NavbarLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kinesiomed"."Footer" (
    "id" SERIAL NOT NULL,
    "proyId" TEXT NOT NULL,
    "logoImage" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Footer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContactBar_proyId_key" ON "kinesiomed"."ContactBar"("proyId");

-- CreateIndex
CREATE UNIQUE INDEX "SocialMediaLink_proyId_key" ON "kinesiomed"."SocialMediaLink"("proyId");

-- CreateIndex
CREATE UNIQUE INDEX "Navbar_proyId_key" ON "kinesiomed"."Navbar"("proyId");

-- CreateIndex
CREATE UNIQUE INDEX "NavbarLink_proyId_key" ON "kinesiomed"."NavbarLink"("proyId");

-- CreateIndex
CREATE UNIQUE INDEX "Footer_proyId_key" ON "kinesiomed"."Footer"("proyId");

-- AddForeignKey
ALTER TABLE "kinesiomed"."SocialMediaLink" ADD CONSTRAINT "SocialMediaLink_contactBarId_fkey" FOREIGN KEY ("contactBarId") REFERENCES "kinesiomed"."ContactBar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kinesiomed"."NavbarLink" ADD CONSTRAINT "NavbarLink_navbarId_fkey" FOREIGN KEY ("navbarId") REFERENCES "kinesiomed"."Navbar"("id") ON DELETE SET NULL ON UPDATE CASCADE;
