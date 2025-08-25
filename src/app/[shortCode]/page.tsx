import { redirect } from "next/navigation";

async function getOriginalUrl(shortCode: string): Promise<string | null> {
  const res = await fetch(`http://localhost:3000/${shortCode}`);
  console.log(res.ok);
  if (!res.ok) return null;
  const data = await res.json();
  return data.originalUrl;
}

export default async function Page({
  params,
}: {
  params: { shortCode: string };
}) {
  const { shortCode } = await params;
  // const link = await getOriginalUrl(shortCode);
  console.log("ShortCode: ", shortCode);

  if (shortCode) {
    redirect(`http://localhost:3000/${shortCode}`);
  }

  return (
    <div>
      <h1>Enlace no encontrado</h1>
      <p>El código proporcionado no corresponde a ningún enlace.</p>
    </div>
  );
}
