import { redirect } from "next/navigation";

async function getOriginalUrl(shortCode: string): Promise<string | null> {
  // Reemplaza esto con tu lógica real de búsqueda, por ejemplo, una llamada a tu API o base de datos
  // Ejemplo:
  const res = await fetch(`http://localhost:3000/${shortCode}`);
  console.log(res);
  if (!res.ok) return null;
  const data = await res.json();
  return data.originalUrl;
}

export default async function Page({
  params,
}: {
  params: { shortCode: string };
}) {
  const { shortCode } = params;
  const originalUrl = await getOriginalUrl(shortCode);

  // if (
  //   originalUrl?.startsWith("http://") ||
  //   originalUrl?.startsWith("https://")
  // ) {
  //   redirect(originalUrl);
  // }

  // if (originalUrl) {
  //   const url = `https://${originalUrl}`;
  //   redirect(url);
  // }

  return (
    <div>
      <h1>Enlace no encontrado</h1>
      <p>El código proporcionado no corresponde a ningún enlace.</p>
    </div>
  );
}
