import prisma from "@/lib/prisma";

export default async function getWalk(walkId: number) {
  return await prisma.entry.findUnique({
    where: {
      id: walkId,
    },
  });
}
