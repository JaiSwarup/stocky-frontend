import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link, redirect, useNavigate } from "@remix-run/react";
import { useState } from "react";
import axios from "axios";
import { sessionToken } from "~/utils/cookies";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formSchema = z.object({
    username: z.string().min(3, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/login",
        values
      );

      document.cookie = `sessionToken=${response.data}; path=/;`;
      navigate("/dashboard");
    } catch {
      console.error("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* <FormDescription className="mb-6 text-black"> */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Enter your credentials below
          </p>
        </div>
        {/* </FormDescription> */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                {...field}
                placeholder="
              Enter your username"
              />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                {...field}
                id="password"
                type="password"
                placeholder="
              Enter your password"
              />
            </FormItem>
          )}
        ></FormField>
        <Button type="submit" variant="default" className=" mt-6 w-full">
          Login
        </Button>
        <FormDescription className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary underline">
            Register
          </Link>
        </FormDescription>
      </form>
    </Form>
  );
}
