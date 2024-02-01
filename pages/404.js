import Layout from "@/componets/layout";
import Link from "next/link";

export default function Pagina404() {
  return (
    <Layout title="Página No Encontrada">
      <p className="error">Página No Encontrada</p>
      <Link href={"/"} className="error-enlace">
        Ir a Inicio
      </Link>
    </Layout>
  );
}
