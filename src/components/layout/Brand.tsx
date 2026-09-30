import { Link } from "react-router";

type BrandProps = {
  inverse?: boolean;
  compact?: boolean;
};

export function Brand({ inverse = false, compact = false }: BrandProps) {
  return (
    <Link
      className={`brand${inverse ? " brand-inverse" : ""}${compact ? " brand-compact" : ""}`}
      to="/"
      aria-label="ByteSpace home"
    >
      <span className="brand-mark">b</span>
      <span className={compact ? "visually-hidden" : undefined}>ByteSpace</span>
    </Link>
  );
}
