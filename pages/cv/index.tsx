import type { NextPage } from "next";
import Head from "next/head";

const languaje = "es";

const multiLingualPage = {
  es: {
    titlePage: "Curriculum Vitae (CV)",
  },
  en: {
    titlePage: "Contact",
  },
};

const multiLingualExperiencies = {
  es: [
    {
      id: "es-004",
      title: "Technical Owner - Team Lead",
      company: "Accenture",
      location: "Buenos Aires, Argentina",
      time: "may. 2022 -> actualidad",
      description: `Technical Owner. Enfocado en Arquitectura de Microservicios y Metodologías Ágiles. Aplicaciones dirigidas para uso interno y para uso público masivo.
    Diseño, implementación, despliegue y mantenimiento de soluciones.
    Liderazgo de equipo, definición y asignación de tareas. 
    Con interés permanente en fomentar la comunicación interna y externa del equipo, incentivando la mejora continua a nivel personal y grupal. Fomentando de manera sostenida valores éticos para el trabajo y promotor permanente del estudio y la capacitación.`,
    },
    {
      id: "es-003",
      title: "Application Development Sr Analyst",
      company: "Accenture",
      location: "Buenos Aires, Argentina",
      time: "jun. 2021 -> may. 2022",
      description: `Full Stack Developer para cliente financiero enfocado en el desarrollo de Aplicaciones Web hechas con React.Js (Next.Js), Node.Js (Nest.Js) y MongoDB . Enfocado en arquitectura de microservicios y Metodologías Ágiles. Aplicaciones dirigidas para uso interno y para uso público masivo.
      Diseño, implementación, despliegue y mantenimiento de soluciones.`,
    },
    {
      id: "es-002",
      title: "Application Development Analyst - Software Developer",
      company: "Accenture",
      location: "Buenos Aires, Argentina",
      time: "nov. 2020 -> jun. 2021",
      description: `Full Stack Developer para cliente financiero enfocado en el desarrollo de Aplicaciones Web hechas con React.JS y Node.JS con el uso de la lógica de consumo de microservicios y Metodologías Ágiles. Aplicaciones dirigidas para uso interno y para uso público masivo.
      Diseño, implementación, despliegue y mantenimiento de soluciones.`,
    },
    {
      id: "es-001",
      title: "Application Development Associate - Software Developer",
      company: "Accenture",
      location: "Buenos Aires, Argentina",
      time: "nov. 2019 -> nov. 2020",
      description: `Full Stack Developer para cliente financiero de la República Argentina enfocado en el desarrollo de Aplicaciones Web hechas con React.JS y Node.JS con el uso de la lógica de consumo de microservicios y Metodologías Ágiles. Aplicaciones dirigidas para uso interno y para uso público masivo.`,
    },
  ],
  en: {
    titleContact: "Contact me",
    youCanContact:
      "You can write me by any of these ways, as soon as I see your message I will answer you",
  },
};

const CVPage: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>
          Miguelangel Parra - {multiLingualPage[languaje].titlePage}
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">{multiLingualPage[languaje].titlePage}</h1>

        <section>
          <h2>Experiencia</h2>
          {multiLingualExperiencies[languaje].map((experience) => (
            <div key={experience.id} className="card">
              <h4>{experience.title}</h4>
              <h5>{`${experience.company} | ${experience.location}`}</h5>
              <h5>{experience.time}</h5>
              <p>{experience.description}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default CVPage;
