import prisma from "@/lib/prisma";

export default async function getWalks() {
  return await prisma.entry.findMany({
    orderBy: {
      date: "desc",
    },
  });
}
