import Image from "next/image";
import styles from "../../styles/guitarras.module.css";
import layout from "../../componets/layout";
import Layout from "../../componets/layout";

export default function Producto({ guitarra }) {
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;

  return (
    <Layout title={`Guitarra ${nombre}`}>
      <div>
        <div className={styles.guitarra}>
          <Image
            src={imagen.data.attributes.url}
            width={600}
            height={400}
            alt={`Imagen Guitarra ${nombre}`}
          />

          <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );
  const { data: guitarra } = await respuesta.json();

  if (!guitarra.length) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      guitarra,
    },
  };
}
