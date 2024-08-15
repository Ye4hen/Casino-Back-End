-- CreateTable
CREATE TABLE "BetItemModel" (
    "id" TEXT NOT NULL,
    "coinId" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "bet" INTEGER NOT NULL,
    "userModelId" TEXT,

    CONSTRAINT "BetItemModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InventoryItemModel" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "userModelId" TEXT,

    CONSTRAINT "InventoryItemModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "avatar" TEXT NOT NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/course-project-326a3.appspot.com/o/user%2Fcasino-avatar.jpg?alt=media&token=35f4fb67-1de1-43b7-a26a-873983754d12',
    "cryptoAccount" TEXT NOT NULL DEFAULT '',
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BetItemModel" ADD CONSTRAINT "BetItemModel_userModelId_fkey" FOREIGN KEY ("userModelId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryItemModel" ADD CONSTRAINT "InventoryItemModel_userModelId_fkey" FOREIGN KEY ("userModelId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
