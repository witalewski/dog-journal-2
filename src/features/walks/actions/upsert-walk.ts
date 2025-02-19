"use server";

import prisma from "@/lib/prisma";
import { editWalkPath, walkPath, walksPath } from "@/paths";
import { revalidatePath } from "next/cache";
import { TZDate } from "@date-fns/tz";

export default async function upsertWalk(
  walkId: number | undefined,
  formData: FormData
) {
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
}
