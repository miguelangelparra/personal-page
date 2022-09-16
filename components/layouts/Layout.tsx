import { FC } from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import { Navbar, Sidebar } from "../ui";

interface Props {
  title?: string;
  content?: string;
  children?: React.ReactNode;
}
export const Layout: FC<Props> = ({
  children,
  title = "Miguelangel Parra",
  content = "Miguelangel Parra",
}) => {
  return (
    <Box
      sx={{
        flexFlow: 1,
      }}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <Sidebar />
      <main>
        <Box sx={{ padding: "10px 20px" }}>{children}</Box>
      </main>
    </Box>
  );
};
