export type ContactFormState = {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<"name" | "email" | "brief" | "consent" | "form", string>>;
};

export const initialContactFormState: ContactFormState = { status: "idle" };
