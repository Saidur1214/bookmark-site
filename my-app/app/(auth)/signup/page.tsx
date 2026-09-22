import SignupForm from "@/components/auth/signup-f";

export default function SignupPage() {
  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="mb-6 text-2xl font-bold">Create account</h1>
      <SignupForm />
    </main>
  );
}