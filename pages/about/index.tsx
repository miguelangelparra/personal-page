import { Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../../components/layouts/Layout";

const languaje = "es";

const multiLingualPage = {
  es: {
    titlePage: "Sobre mi",
  },
  en: {
    titlePage: "About me",
  },
};

const multiLingualContact = {
  es: {
    titleContact: "Te cuento sobre mi",
    youCanContact:
      "Puedes escribirme por cualquiera de estos medios, apenas vea tu mensaje te constestaré",
  },
  en: {
    titleContact: "I talk you about me",
    youCanContact:
      "You can write me by any of these ways, as soon as I see your message I will answer you",
  },
};

const AboutPage: NextPage = () => {
  return (
    <Layout title={`Miguelangel Parra - ${multiLingualPage[languaje].titlePage}`}>
     
        <Grid
          container
          spacing={0}
          sx={{ height: "calc(100vh - 100px)" }}
          alignItems="center"
          alignContent={"center"}
          textAlign="center"
        >
          <Grid item xs={12} spacing={2} textAlign={"center"}>
            {/* <Typography variant="h3" component="h1">
              {multiLingualContact[languaje].titleContact}
            </Typography> */}
            <Typography variant="h4" component="p">
              Pronto te contaré más sobre mi...
            </Typography>
          </Grid>
        </Grid>
    </Layout>
  );
};

export default AboutPage;
