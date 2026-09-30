import { AuthForm } from "./AuthForm";
import { AuthShowcase } from "./AuthShowcase";
import "./auth.css";

type AuthPageProps = {
  mode: "login" | "signup";
};

export function AuthPage({ mode }: AuthPageProps) {
  return (
    <main className="auth-page grid-bg">
      <div className={`auth-layout auth-layout-${mode}`}>
        <AuthShowcase mode={mode} />
        <AuthForm mode={mode} />
      </div>
    </main>
  );
}
