"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, FieldPath, FieldValues, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField, { SignInForm, SignUpForm } from "./custom-form-field";
import { SignInFormSchema, SignUpFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";

type FormSchema = SignInForm | SignUpForm;
interface FormFieldsData<FormSchema extends FieldValues> {
  control: Control<FormSchema>;
  name: FieldPath<FormSchema>;
  placeholder: string;
  label: string;
}

export default function AuthForm({ type }: AuthFormProps) {
  const [user] = useState(null);
  const [loading, setLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<FormSchema>({
    resolver: zodResolver(
      type === "sign-in" ? SignInFormSchema : SignUpFormSchema,
    ),
    defaultValues:
      type === "sign-in"
        ? { userName: "", email: "", password: "" }
        : { firstName: "", lastName: "", email: "", password: "" },
  });

  const FormFields: FormFieldsData<SignInForm | SignUpForm>[] =
    type === "sign-in"
      ? [
          {
            control: form.control,
            name: "userName",
            placeholder: "Username ",
            label: "User Name",
          },
          {
            control: form.control,
            name: "email",
            placeholder: "Email ",
            label: "Email",
          },
          {
            control: form.control,
            name: "password",
            placeholder: "Password ",
            label: "Password",
          },
        ]
      : [
          {
            control: form.control,
            name: "firstName",
            placeholder: "First Name ",
            label: "First Name",
          },
          {
            control: form.control,
            name: "lastName",
            placeholder: "Last Name ",
            label: "Last Name",
          },
          {
            control: form.control,
            name: "email",
            placeholder: "Email ",
            label: "Email",
          },
          {
            control: form.control,
            name: "password",
            placeholder: "Password ",
            label: "Password",
          },
          {
            control: form.control,
            name: "userName",
            placeholder: "Username ",
            label: "User Name",
          },
        ];

  // 2. Define a submit handler.
  function onSubmit(values: FormSchema) {
    setLoading(true);
    console.log(values);
    setLoading(false);
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link
          href={"/"}
          className="mb-4 flex cursor-pointer items-center gap-1"
        >
          <Image
            src="/icons/logo.svg"
            width={24}
            height={24}
            alt="Mudra Mitra Logo"
            className="size-14 max-xl:size-8"
          />
          <h1 className="font-inter text-xl font-semibold text-black-2">
            Mudra Mitra
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-35 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-15 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col gap-4">{/* Plaid Link */}</div>
      ) : (
        <>
          <Form {...form}>
            {type === "sign-in" ? (
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                {FormFields.map((field) => (
                  <CustomFormField
                    key={field.name}
                    control={field.control}
                    label={field.label}
                    name={field.name}
                    placeholder={field.placeholder}
                  />
                ))}

                <Button type="submit" className="form-btn" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      &nbsp; Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </form>
            ) : (
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                {FormFields.map((field) => (
                  <CustomFormField
                    key={field.name}
                    control={field.control}
                    label={field.label}
                    name={field.name}
                    placeholder={field.placeholder}
                  />
                ))}

                <Button type="submit" className="form-btn" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      &nbsp; Loading...
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </form>
            )}
          </Form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              className="form-link"
            >
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
}

// https://chatgpt.com/share/024f1632-c9dd-40c8-8616-7b197513f5ba
