import {
  Typography,
  AppBar,
  Toolbar,
  Link,
  CssBaseline,
  Box,
  Paper,
} from "@mui/material";
import { Link as GatsbyLink } from "gatsby";
import { container, heading, navLinkText } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <CssBaseline />
      <Box component="main" padding="1rem" maxWidth={500} margin="0 auto">
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
