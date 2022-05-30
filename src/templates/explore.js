import * as React from "react";
import { navigate } from "gatsby-link";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Navbar from "../components/Navbar";
import Content, { HTMLContent } from "../components/Content";
import Gallery from "../components/Gallery";

export default function ExplorePage({ data }) {
  const { frontmatter } = data.page;
  //   const PageContent = HTMLContent || Content;
  return (
    <Layout>
      <Navbar lang={frontmatter.language} slug={data.page.fields.slug} />
      <StaticImage
        src="../img/pool2.jpg"
        alt="contact"
        placeholder="blurred"
        objectFit={"cover"}
        layout="fullWidth"
        aspectratio={3 / 1}
      />
      <section
        className="section"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
      >
        <div className="container">
          <div className="content">
            <h1>Explore</h1>
            {/* <PageContent className="content" content={data.page.html} /> */}
            <h2>Sarantaporo</h2>
            <Gallery
              gallery={[
                "sarandaporo.jpg",
                "sarandaporo1.jpg",
                "sarandaporo2.jpg",
                "sarandaporo3.jpg",
                "sarandaporo4.jpg",
                "sarandaporo6.jpg",
              ]}
            />
            <h2>Benja</h2>
            <Gallery
              gallery={["benja.jpg", "benja1.jpg", "benja2.jpg", "benja3.jpg"]}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const ExplorePageQuery = graphql`
  query ExplorePageById($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      html
      frontmatter {
        language
        title
      }
    }
  }
`;
