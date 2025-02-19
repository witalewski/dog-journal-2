import { LucideProps, MessageSquareWarningIcon } from "lucide-react";
import { cloneElement, ReactElement } from "react";

export default function Placeholder({
  label,
  icon = <MessageSquareWarningIcon />,
  button = <div />,
}: {
  label: string;
  icon?: ReactElement<LucideProps>;
  button?: ReactElement<HTMLElement>;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-2 self-center">
      {cloneElement(icon, { size: 36 })}
      <h2 className="text-lg">{label}</h2>
      {cloneElement(button, { className: "h-10" })}
    </div>
  );
}
