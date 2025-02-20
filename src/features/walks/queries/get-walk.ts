import prisma from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server";

export default async function getWalk(walkId: number) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user || user.id !== "93b708b7-de35-41e7-9cf9-74b08c076b0c") {
    throw new Error("Unauthorized");
  }
  return await prisma.entry.findUnique({
    where: {
      id: walkId,
    },
  });
}
