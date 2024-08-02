import AuthForm from "@/components/auth-form";
export const type = "sign-in";
export default function SignIn() {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-in" />
    </section>
  );
}
