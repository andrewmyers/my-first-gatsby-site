import { Box, CssBaseline, Link, Typography } from "@mui/material";
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby";
import { heading, navLinkText } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <title>{pageTitle}</title>
      <CssBaseline />
      <Box component="main" padding="1rem" maxWidth={500} margin="0 auto">
        <Typography
          variant="subtitle"
          sx={{
            fontSize: "3rem",
            color: "gray",
            fontWeight: 700,
            margin: "3rem 0",
          }}
        >
          {data.site.siteMetadata.title}
        </Typography>
        <Box component="nav" marginBottom="1rem">
          <Link
            component={GatsbyLink}
            to="/"
            className={navLinkText}
            color="inherit"
            underline="none"
          >
            Home
          </Link>
          <Link
            component={GatsbyLink}
            to="/about"
            className={navLinkText}
            color="inherit"
            underline="none"
          >
            About
          </Link>
          <Link
            component={GatsbyLink}
            to="/blog"
            className={navLinkText}
            color="inherit"
            underline="none"
          >
            Blog
          </Link>
        </Box>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          className={heading}
        >
          {pageTitle}
        </Typography>
        {children}
      </Box>
    </div>
  );
};

export default Layout;
