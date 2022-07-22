import {
  DeepRequired,
  FieldError,
  FieldErrorsImpl,
  FieldPath,
  Path,
} from "react-hook-form";

export default function get<
  TData,
  TFieldName extends FieldPath<TData>
>(obj: FieldErrorsImpl<DeepRequired<TData>>, path: TFieldName) {
  return path.split(".").reduce((r, p) => {
    if (typeof r === "object") {
      p = p.startsWith("[") ? p.replace(/\D/g, "") : p;

      return (r as any)[p];
    }

    return undefined;
  }, obj) as FieldError | undefined;
}
