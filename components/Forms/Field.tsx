import { ReactNode, useId } from "react";
import {
  FieldPath,
  Path,
  UseFormRegisterReturn,
  UseFormReturn,
} from "react-hook-form";
import { TypeOf, z } from "zod";
import get from "../../utils/get";

export default function Field<
  TSchema extends z.Schema<any, any>,
  TData extends z.infer<TSchema>,
  TFieldName extends FieldPath<TData>
>({
  label,
  children,
  name,
  form,
}: {
  label: ReactNode;
  name: TFieldName;
  form: UseFormReturn<TData>;
  children: (
    meta: UseFormRegisterReturn<TFieldName> & {
      id: string;
      placeholder: " ";
      className: string;
    }
  ) => ReactNode;
}) {
  const id = useId();
  const error = get(form.formState.errors, name);
  return (
    <div className="relative z-0 w-full mb-6 group">
      {children({
        ...form.register(name),
        id,
        placeholder: " ",
        className:
          "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
      })}
      <label
        htmlFor={id}
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
      {error && (
        <p className="mt-0 text-sm text-red-600 dark:text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}

export type FieldProps = Parameters<typeof Field>[number];
