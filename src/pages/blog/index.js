import {
  Card,
  Typography,
  Link,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { graphql, Link as GatsbyLink } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/Layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <Link
          to={`/blog/${node.slug}`}
          key={node.id}
          component={GatsbyLink}
          underline="none"
        >
          <Card sx={{ marginBottom: "1.25rem" }} component="article">
            <CardActionArea>
              <CardContent>
                <Typography variant="h4" component="h2">
                  {node.frontmatter.title}
                </Typography>
                <Typography variant="body2">
                  Posted: {node.frontmatter.date}
                </Typography>
                <Typography variant="body1">{node.excerpt}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
        slug
      }
    }
  }
`;

export default BlogPage;
