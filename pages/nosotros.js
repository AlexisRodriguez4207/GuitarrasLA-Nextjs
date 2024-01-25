import Image from "next/image";
import Layout from "@/componets/layout";
import styles from "@/styles/nosotros.module.css";

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description="Sobre nosotros, guitarLA, tienda de música"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="Imagen sobre Nosotros"
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              mattis magna a erat vulputate mattis. Maecenas eget maximus purus,
              eu blandit dui.
            </p>
            <p>
              Mauris tempus commodo sollicitudin. Suspendisse potenti. Aenean ac
              vestibulum dolor. Phasellus at mattis mi. Nam in porttitor risus.
              Quisque ullamcorper mauris elit, nec luctus lacus dictum eu.
              Vivamus consectetur turpis sed quam faucibus vestibulum. Nulla
              pulvinar egestas volutpat. Fusce cursus elementum libero blandit
              gravida. In ac dapibus nulla. Vestibulum sodales venenatis orci,
              quis pulvinar justo suscipit et. Aenean et ante vel justo
              elementum interdum eu ut nibh.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
