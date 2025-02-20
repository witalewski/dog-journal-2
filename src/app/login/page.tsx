import CardCompact from "@/components/card-compact";
import { login, signup } from "./actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <CardCompact
        className="w-full max-w-[560px] self-center"
        title="Log in"
        description="Or sign up"
        content={
          <form className="flex flex-col gap-2">
            <label htmlFor="email">Email:</label>
            <Input id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <Input id="password" name="password" type="password" required />
            <Button formAction={login}>Log in</Button>
            <Button formAction={signup}>Sign up</Button>
          </form>
        }
      />
    </div>
  );
}
