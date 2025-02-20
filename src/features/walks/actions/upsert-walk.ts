"use server";

import prisma from "@/lib/prisma";
import { editWalkPath, walkPath, walksPath } from "@/paths";
import { createClient } from "@/utils/supabase/server";
import { TZDate } from "@date-fns/tz";
import { revalidatePath } from "next/cache";

export default async function upsertWalk(
  walkId: number | undefined,
  actionState: { message: string },
  formData: FormData
) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user || user.id !== "93b708b7-de35-41e7-9cf9-74b08c076b0c") {
    throw new Error("Unauthorized");
  }

  const [year, month, day] = (formData.get("date") as string).split("-");
  const [hours, minutes] = (formData.get("time") as string).split(":");
  const date = new TZDate(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
    parseInt(hours),
    parseInt(minutes)
  );

  const data = {
    date: date.toISOString(),
    rating: formData.get("rating") as string,
    city: formData.get("city") as string,
    location: formData.get("location") as string,
    person: formData.get("person") as string,
    lengthMinutes: parseInt(formData.get("lengthMinutes") as string),
    weather: formData.get("weather") as string,
    behavior: formData.get("behavior") as string,
    notes: formData.get("notes") as string,
  };

  await prisma.entry.upsert({
    select: { id: true },
    where: { id: walkId ?? -1 },
    update: data,
    create: data,
  });

  revalidatePath(walksPath());

  if (walkId) {
    revalidatePath(walkPath(walkId));
    revalidatePath(editWalkPath(walkId));
  }

  return {
    message: "Walk saved!",
  };
}
