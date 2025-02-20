"use client";

import Placeholder from "@/components/placeholder";

export default function ErrorPage({
  error,
}: {
  error: {
    message: string;
    stack: string;
  };
}) {
  return <Placeholder label={error.message ?? "Something went wrong"} />;
}
