-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "director" TEXT NOT NULL,
    "movieName" TEXT NOT NULL,
    "yearReleased" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);
