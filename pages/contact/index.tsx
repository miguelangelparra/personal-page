import type { NextPage } from "next";
import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import { Layout } from "../../components/layouts/Layout";

const languaje = "es";


const multiLingualContact = {
  es: {
    pageInformation:{
      title: "Contacto",
    },
    titleContact: "Contactame",
    youCanContact:
      "Puedes escribirme por cualquiera de estos medios, apenas vea tu mensaje te contestaré",
  },
  en: {
    pageInformation:{
      title: "Contact",
    },
    titleContact: "Contact me",
    youCanContact:
      "You can write me by any of these ways, as soon as I see your message I will answer you",
  },
};

const btnContactWays = [
  {
    id: "mail",
    text: "Mail",
    to: "mailto:miguelangel.parradavila@outlook.com?Subject=I%20write%20from%20miguelangelparra.com",
  },
  {
    id: "twitter",
    text: "Twitter",
    to: "https://twitter.com/migpsi",
  },
  {
    id: "linkedin",
    text: "Linkedin",
    to: "https://www.linkedin.com/in/miguelangelparradavila/",
  },
];
const handleClickContactWay=(to: string): void=> {
window.open(to,"_blank","rel=noopener noreferrer")

}
const ContactPage: NextPage = () => {
  return (
    <Layout title={`Miguelangel Parra - ${multiLingualContact[languaje].pageInformation.title}`}>
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
              {multiLingualContact[languaje].titleContact}
            </Typography>
            <Typography component="h2" variant="h5">
              {multiLingualContact[languaje].youCanContact}
            </Typography>
          </Grid>

          <Grid item xs={12} className="mt-32" textAlign={"center"}>
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical contained button group"
              variant="text"
            >
              {btnContactWays.map((way) => (
                  <Button key={way.id} size="large" onClick={()=>handleClickContactWay(way.to)}>
                    {way.text}
                  </Button>
              ))}
            </ButtonGroup>
          </Grid>
         
        </Grid>
    </Layout>
  );
};

export default ContactPage;


