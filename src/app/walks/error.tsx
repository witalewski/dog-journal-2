"use client";

export default function ErrorPage({
  error,
}: {
  error: {
    message: string;
    stack: string;
  };
}) {
  return (
    <div className="flex flex-1 items-center justify-center self-center">
      {error.message ?? "Something went wrong"}
    </div>
  );
}
