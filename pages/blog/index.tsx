import { NextPage } from "next";
import { Grid, Typography } from "@mui/material";
import { Layout } from "../../components/layouts";

const BlogPage: NextPage = () => {
  return (
    <Layout
      title="Miguelangel Parra - Blog"
      content="Blog de Miguelangel Parra"
    >
      <Grid
        container
        spacing={0}
        sx={{ height: "calc(100vh - 100px)" }}
        alignItems="center"
        alignContent={"center"}
        textAlign="center"
      >
        <Grid item xs={12} textAlign={"center"}>
          <Typography component="h1" variant="h3">
            Blog
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default BlogPage;
