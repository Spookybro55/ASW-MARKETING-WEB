type FeatureCardProps = {
  title: string;
  text: string;
  eyebrow?: string;
  variant?: "default" | "elevated" | "accent";
};

export default function FeatureCard({
  title,
  text,
  eyebrow,
  variant = "default",
}: FeatureCardProps) {
  const cardClass =
    variant === "accent"
      ? "card-accent"
      : variant === "elevated"
        ? "card-elevated"
        : "glass-card";

  return (
    <div className={`${cardClass} transition duration-300 hover:border-white/[0.12]`}>
      {eyebrow ? (
        <div
          className="mb-3 text-xs font-bold uppercase tracking-widest"
          style={{ color: "var(--brand)" }}
        >
          {eyebrow}
        </div>
      ) : null}

      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-gray-300">{text}</p>
    </div>
  );
}
