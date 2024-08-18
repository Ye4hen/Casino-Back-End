-- DropForeignKey
ALTER TABLE "BetItemModel" DROP CONSTRAINT "BetItemModel_userModelId_fkey";

-- DropForeignKey
ALTER TABLE "InventoryItemModel" DROP CONSTRAINT "InventoryItemModel_userModelId_fkey";

-- CreateTable
CREATE TABLE "Coins" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "img" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Coins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Games" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FAQs" (
    "id" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "isOpen" BOOLEAN NOT NULL,
    "question" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FAQs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SlotsPrizes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "img_bl" TEXT NOT NULL,
    "img_sl" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SlotsPrizes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WheelPrizes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WheelPrizes_pkey" PRIMARY KEY ("id")
);
