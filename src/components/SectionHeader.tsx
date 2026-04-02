type SectionHeaderProps = {
  title: string;
  text: string;
  centered?: boolean;
};

export default function SectionHeader({
  title,
  text,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <div className="brand-line mb-5" style={centered ? { margin: "0 auto 1.25rem" } : undefined} />
      <h2 className="section-title">{title}</h2>
      <p className="section-text mt-4">{text}</p>
    </div>
  );
}
