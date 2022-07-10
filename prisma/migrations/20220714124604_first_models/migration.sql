-- CreateTable
CREATE TABLE "Owner" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" JSONB NOT NULL,
    "bankAccount" JSONB NOT NULL,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Premises" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "Premises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" JSONB NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_OwnerToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OwnerToProperty" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OwnerToPremises" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_OwnerToUser_AB_unique" ON "_OwnerToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_OwnerToUser_B_index" ON "_OwnerToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OwnerToProperty_AB_unique" ON "_OwnerToProperty"("A", "B");

-- CreateIndex
CREATE INDEX "_OwnerToProperty_B_index" ON "_OwnerToProperty"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OwnerToPremises_AB_unique" ON "_OwnerToPremises"("A", "B");

-- CreateIndex
CREATE INDEX "_OwnerToPremises_B_index" ON "_OwnerToPremises"("B");

-- AddForeignKey
ALTER TABLE "Premises" ADD CONSTRAINT "Premises_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OwnerToUser" ADD CONSTRAINT "_OwnerToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Owner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OwnerToUser" ADD CONSTRAINT "_OwnerToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OwnerToProperty" ADD CONSTRAINT "_OwnerToProperty_A_fkey" FOREIGN KEY ("A") REFERENCES "Owner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OwnerToProperty" ADD CONSTRAINT "_OwnerToProperty_B_fkey" FOREIGN KEY ("B") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OwnerToPremises" ADD CONSTRAINT "_OwnerToPremises_A_fkey" FOREIGN KEY ("A") REFERENCES "Owner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OwnerToPremises" ADD CONSTRAINT "_OwnerToPremises_B_fkey" FOREIGN KEY ("B") REFERENCES "Premises"("id") ON DELETE CASCADE ON UPDATE CASCADE;
