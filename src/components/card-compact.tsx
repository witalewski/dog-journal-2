import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function CardCompact({
  title,
  description,
  content,
  className,
  footer,
}: {
  title: string;
  description: string;
  content: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}
