import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/layouts/Layout";
import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const handleItemMenuClick = (to: string): void => {
    router.push(to);
  };

  return (
    <Layout>
      <Head>
        <title>Miguelangel Parra</title>
        <meta name="description" content="About Miguelangel Parra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid
          container
          spacing={0}
          sx={{ height: "calc(100vh - 100px)" }}
          alignItems="center"
          alignContent={"center"}
          textAlign="center"
        >
          <Grid item xs={12} spacing={2} textAlign={"center"}>
            <Typography component="h1" variant="h3">
              {multiLingualMenu[languaje].iAm}
            </Typography>
            <Typography component="h2" variant="h5">
              {multiLingualMenu[languaje].softwareDeveloper}
            </Typography>
          </Grid>

          <Grid item xs={12} className="mt-32" textAlign={"center"}>
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical contained button group"
              variant="text"
            >
              {menuItems.map((item) => (
                <Button
                  size="large"
                  key={item.id}
                  onClick={() => handleItemMenuClick(item.to)}
                >
                  <a> {item.text}</a>
                </Button>
              ))}
            </ButtonGroup>
          </Grid>
        </Grid>
      </main>
    </Layout>
  );
};

export default Home;
