"use server";

import prisma from "@/lib/prisma";

export default async function upsertWalk(
  walkId: number | undefined,
  formData: FormData
) {
  const data = {
    date: new Date(formData.get("date") as string),
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
}
