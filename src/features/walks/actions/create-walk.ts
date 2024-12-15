"use server";

import prisma from "@/lib/prisma";

export default async function createWalk(formData: FormData) {
  await prisma.entry.create({
    data: {
      date: new Date(formData.get("date") as string),
      rating: formData.get("rating") as string,
      city: formData.get("city") as string,
      location: formData.get("location") as string,
      person: formData.get("person") as string,
      lengthMinutes: parseInt(formData.get("lengthMinutes") as string),
      weather: formData.get("weather") as string,
      behavior: formData.get("behavior") as string,
      notes: formData.get("notes") as string,
    },
  });
}
