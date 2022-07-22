import Field from "../../components/Forms/Field";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Header from "../../components/Forms/Header";
import Admin from "../../layouts/Admin";
import Form from "../../components/Forms/Form";

const userSchema = z.object({
  firstName: z.string().min(3).max(6),
  lastName: z.string().min(1, { message: "The lastName is required." }).max(36),
  // mobileNumber: z.string().min(10).max(13).optional(),
  email: z
    .object({
      email: z
        .string()
        .min(1, "The email is required.")
        .email({ message: "The email is invalid." }),
      confirmEmail: z.string(),
    })
    .refine((data) => data.email === data.confirmEmail, {
      message: "Emails don't match.",
      path: ["confirmEmail"], // Set the path of this error on the confirmEmail field.
    }),
  // // interesting case : at first, no option radio are checked so this is null. So the error is "Expected string, received null".
  // // So we need to accept first string or null, in order to apply refine to set a custom message.
  // isDeveloper: z
  //   .string()
  //   .or(z.null())
  //   .refine((val) => Boolean(val), {
  //     message: "Please, make a choice!",
  //   }),
  // //title: z.union([z.literal("Mr"), z.literal("Mrs"), z.literal("Miss"), z.literal("Dr")]),
  // title: z.enum(["Mr", "Mrs", "Miss", "Dr"]), // For educationnal purpose (it's overkill here, as the UI constrains it already with a select).
});
// The refine method is used to add custom rules or rules over multiple fields.
// Infer the TS type according to the zod schema.

export default function Forms() {
  // The onSubmit function is invoked by RHF only if the validation is OK.
  return (
    <div className="flex flex-wrap">
      <div className="w-full px-4 lg:w-8/12">
        <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-slate-100">
          <Form schema={userSchema} onSubmit={(d) => console.log(d)}>
            {(form) => (
              <>
                <div className="px-6 py-6 mb-0 bg-white rounded-t">
                  <Header>User Information</Header>
                  <div className="grid md:grid-cols-2 md:gap-x-6">
                    <Field label="First Name" form={form} name="firstName">
                      {(meta) => <input type="text" {...meta} />}
                    </Field>
                    <Field label="Last Name" form={form} name="lastName">
                      {(meta) => <input type="text" {...meta} />}
                    </Field>
                  </div>
                  <Field label="Email" form={form} name="email.email">
                    {(meta) => <input type="text" {...meta} />}
                  </Field>
                  <Field label="Confirm Email" form={form} name="email.confirmEmail">
                    {(meta) => <input type="text" {...meta} />}
                  </Field>
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
}

Forms.layout = Admin;
