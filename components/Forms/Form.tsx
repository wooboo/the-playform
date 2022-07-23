import { DeepPartial, FieldValues, useForm, UseFormReturn } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { DevTool } from "@hookform/devtools";

export default function Form<
  TSchema extends z.Schema<any, any>,
  TData = z.infer<TSchema>
>({
  schema,
  children,
  onSubmit,
  defaultValues
}: {
  onSubmit: (data: TData) => void | Promise<void>;
  children: (form: UseFormReturn<TData>) => React.ReactNode;
  schema: TSchema;
  defaultValues?: DeepPartial<TData>
}) {
  const form = useForm<TData>({
    resolver: zodResolver(schema), // Configuration the validation with the zod schema.
    defaultValues: defaultValues
  });
  console.log("FORM", form.formState);
  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children(form)}</form>
      <DevTool control={form.control} />
    </>
  );
}

export type FormProps = Parameters<typeof Form>[number];
