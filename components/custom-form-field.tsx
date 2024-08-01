import { Input } from "./ui/input";
import React from "react";
import { FormField, FormLabel, FormControl, FormMessage } from "./ui/form";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { FormSchema } from "@/lib/utils";
export default function CustomFormField({
  control,
  name,
  placeholder,
  label,
}: {
  control: Control<z.infer<typeof FormSchema>>;
  name: FieldPath<z.infer<typeof FormSchema>>;
  placeholder: string;
  label: string;
}) {
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
