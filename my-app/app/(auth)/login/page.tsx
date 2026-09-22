import LoginForm from "@/components/auth/login-f";

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="mb-6 text-2xl font-bold">Sign in</h1>
      <LoginForm />
    </main>
  );
}