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
import { Link, redirect } from "@remix-run/react";
import axios from "axios";
import { useState } from "react";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  let formSchema = z.object({
    username: z.string().min(3, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
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
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const response = axios
        .post("http://localhost:8080/api/register", values)
        .then((response) => {
          console.log(response.data);
        });
      redirect("/login");
    } catch {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormDescription className="mb-6 text-black">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-balance text-sm text-muted-foreground">
              Enter your credentials below
            </p>
          </div>
        </FormDescription>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                {...field}
                placeholder="
                Enter your email"
              />
            </FormItem>
          )}
        ></FormField>
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
          Create account
        </Button>
        <FormDescription className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-primary underline">
            Login
          </Link>
        </FormDescription>
      </form>
    </Form>
  );
}
