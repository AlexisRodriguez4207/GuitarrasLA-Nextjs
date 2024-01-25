import Link from "next/link";
import Layout from "@/componets/layout";

export default function Home() {
  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Blog de música, venta de guitarrasy más"}
      >
        <h1>Hola Mundo</h1>

        <Link href="/nosotros">Nosotros</Link>
      </Layout>
    </>
  );
}
