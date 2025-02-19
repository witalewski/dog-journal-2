import { PropsWithChildren } from "react";
import { Separator } from "./ui/separator";

export default function Heading({
  title,
  description,
  children,
}: PropsWithChildren<{
  title: string;
  description?: string;
}>) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <div>{children}</div>
      </div>

      <Separator />
    </>
  );
}
