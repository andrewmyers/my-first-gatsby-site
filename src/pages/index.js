import { Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <Typography variant="h4" component="p" gutterBottom>Welcome to my Gatsby site!</Typography>
      <Typography variant="body1" gutterBottom>I&apos;m making this by following the Gatsby Tutorial.</Typography>
      <StaticImage
        src="https://www.gatsbyjs.com/static/00cce85e5293015b32d90b17e18afdaf/416ee/index-page-with-static-image-from-url.png"
        alt="Image of an image showing on the site i'm making"
      />
    </Layout>
  );
};

export default IndexPage;
