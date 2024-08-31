-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(50) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
