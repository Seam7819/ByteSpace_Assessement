import { useState, type FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router";

type AuthMode = "login" | "signup";

type AuthFormProps = {
  mode: AuthMode;
};

export function AuthForm({ mode }: AuthFormProps) {
  const isSignup = mode === "signup";
  const [showPassword, setShowPassword] = useState(false);
  const [feedback, setFeedback] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback(
      isSignup
        ? "Your details are ready. Account creation will be available when authentication is connected."
        : "Your details are ready. Sign-in will be available when authentication is connected.",
    );
  }

  function socialSignIn(provider: string) {
    setFeedback(`${provider} sign-in is not connected yet.`);
  }

  return (
    <section className="auth-panel" aria-labelledby="auth-heading">
      <p className="auth-panel-kicker">
        {isSignup ? "Create an Account" : "Sign In"}
      </p>
      <h1 id="auth-heading">
        {isSignup ? (
          <>
            Welcome to
            <br />
            ByteSpace
          </>
        ) : (
          "Welcome Back"
        )}
      </h1>

      <form className="auth-form" onSubmit={submit}>
        {isSignup && (
          <label className="auth-field">
            <span>Full Name</span>
            <input
              name="name"
              type="text"
              placeholder="Jamie Davis"
              autoComplete="name"
              required
            />
          </label>
        )}
        <label className="auth-field">
          <span>Email</span>
          <input
            name="email"
            type="email"
            placeholder="designer@example.com"
            autoComplete="email"
            required
          />
        </label>
        <label className="auth-field">
          <span>Password</span>
          <span className="password-control">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              autoComplete={isSignup ? "new-password" : "current-password"}
              minLength={8}
              required
            />
            <button
              className="password-toggle"
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </span>
        </label>
        <div className="auth-submit-row">
          {!isSignup && (
            <a
              className="forgot-link"
              href="mailto:support@bytespace.studio?subject=Password%20reset"
            >
              Forgot password?
            </a>
          )}
          <button className="auth-submit" type="submit">
            {isSignup ? "Continue" : "Sign In"}
          </button>
        </div>
      </form>

      {feedback && (
        <p className="auth-feedback" role="status">
          {feedback}
        </p>
      )}

      {!isSignup && (
        <>
          <div className="auth-divider">
            <span>Or</span>
          </div>
          <div className="social-auth">
            <button
              type="button"
              aria-label="Continue with Facebook"
              onClick={() => socialSignIn("Facebook")}
            >
              <span className="facebook-auth-mark" aria-hidden="true">f</span>
            </button>
            <button
              className="google-auth"
              type="button"
              aria-label="Continue with Google"
              onClick={() => socialSignIn("Google")}
            >
              G
            </button>
          </div>
        </>
      )}

      <p className="auth-switch">
        {isSignup ? "Already have an account?" : "New user?"}{" "}
        <Link to={isSignup ? "/login" : "/signup"}>
          {isSignup ? "Login" : "Create an account"}
        </Link>
      </p>
    </section>
  );
}
