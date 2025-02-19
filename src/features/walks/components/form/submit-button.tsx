"use client";

import { Button } from "@/components/ui/button";
import { LoaderCircleIcon } from "lucide-react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending && <LoaderCircleIcon className="mr-2 h-4 w-4 animate-spin" />}
      {label}
    </Button>
  );
};

export default SubmitButton;
