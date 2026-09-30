type BrandProps = {
  inverse?: boolean;
};

export function Brand({ inverse = false }: BrandProps) {
  return (
    <a
      className={`brand${inverse ? " brand-inverse" : ""}`}
      href="#home"
      aria-label="ByteSpace home"
    >
      <span className="brand-mark">b</span>
      <span>ByteSpace</span>
    </a>
  );
}
