import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const languaje = "es";

const multiLingualMenu = {
  es: {
    iAm: "Soy Miguelangel Parra",
    softwareDeveloper: "Desarrollador de Software",
    aboutMe: "Sobre Mi",
    cv: "CV",
    contact: "Contacto",
  },
  en: {
    iAm: "I'm Miguelangel Parra",
    softwareDeveloper: "Software Developer",
    aboutMe: "About Me",
    cv: "CV",
    contact: "Contact",
  },
};

const menuItems = [
  { id: "aboutMe", text: multiLingualMenu[languaje].aboutMe, to: "/about" },
  {
    id: "cv",
    text: multiLingualMenu[languaje].cv,
    to: "/cv",
  },
  { id: "contact", text: multiLingualMenu[languaje].contact, to: "/contact" },
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Miguelangel Parra</title>
        <meta name="description" content="About Miguelangel Parra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{multiLingualMenu[languaje].iAm}</h1>
        <p>{multiLingualMenu[languaje].softwareDeveloper}</p>

        <div className="mt-32">
          {menuItems.map((item) => (
            <div key={item.id}>
              <a href={item.to}>
                <h2>{item.text}</h2>
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
