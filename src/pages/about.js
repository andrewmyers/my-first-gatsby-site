import { Link } from "gatsby";
import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <main>
        <title>About Me</title>
        <h1>About Me</h1>
        <Link to="/">Home</Link>
        <p>
          Hi there! I&apos;m the proud creator of this site, which I built with
          Gatsby.
        </p>
      </main>
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
