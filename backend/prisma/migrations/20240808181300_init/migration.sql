-- CreateTable
CREATE TABLE "new_user" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "new_user_pkey" PRIMARY KEY ("id")
);
