import { Input } from "./ui/input";
import React from "react";
import { FormField, FormLabel, FormControl, FormMessage } from "./ui/form";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import { z } from "zod";
import { SignInFormSchema, SignUpFormSchema } from "@/lib/utils";

export type SignInForm = z.infer<typeof SignInFormSchema>;
export type SignUpForm = z.infer<typeof SignUpFormSchema>;

interface CustomFormFieldProps<FormSchema extends FieldValues> {
  control: Control<FormSchema>;
  name: FieldPath<FormSchema>;
  placeholder: string;
  label: string;
}

export default function CustomFormField<
  FormSchema extends SignInForm | SignUpForm,
>({ control, name, placeholder, label }: CustomFormFieldProps<FormSchema>) {
  return (
    <div>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <div className="form-item">
            <FormLabel className="form-label" htmlFor={label}>
              {label}
            </FormLabel>
            <div className="flex w-full flex-col">
              <FormControl>
                <Input
                  className="input-class"
                  {...field}
                  id={label}
                  placeholder={placeholder}
                  type={name === "password" ? "password" : "text"}
                />
              </FormControl>
            </div>
            <FormMessage {...field} className="form-message mt-2" />
          </div>
        )}
      />
    </div>
  );
}
