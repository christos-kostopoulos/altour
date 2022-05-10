import React from "react";
import Markdown from "react-markdown";
import { graphql, Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import FullWidthImage from "../components/FullWidthImage";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Content, { HTMLContent } from "../components/Content";

const ProjectPage = ({ data }) => {
  const PageContent = HTMLContent || Content;
  const { frontmatter: page } = data.page;

  const heroImage = getImage(page.image) || page.image;
  console.log(page);
  return (
    <Layout>
      <Navbar lang={page.language} slug={data.page.fields.slug} />
      <div className="content">
        <FullWidthImage img={heroImage} />
        <section className="section section--gradient arrow-section-white"  style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
          <div className="container">
            <h2 className="title  has-text-weight-light is-bold-light is-size-2 is-size-3-mobile">
              {page.title}
            </h2>
            <PageContent className="content" content={data.page.html} />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProjectPage;

export const ProjectPageQuery = graphql`
  query ProjectById($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      html
      frontmatter {
        language
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
