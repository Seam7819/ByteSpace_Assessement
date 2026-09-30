import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  }

  return (
    <form className="newsletter-form" onSubmit={submit}>
      <label className="sr-only" htmlFor="newsletter-email">
        Your email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        disabled={subscribed}
      />
      <button className="button button-lime" type="submit">
        {subscribed ? (
          <>
            <Check size={15} /> You're on the list
          </>
        ) : (
          <>
            Subscribe <ArrowRight size={15} />
          </>
        )}
      </button>
    </form>
  );
}
