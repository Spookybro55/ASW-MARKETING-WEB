export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await params;
  return null;
}
