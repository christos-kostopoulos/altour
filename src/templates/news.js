import React from "react";
import Markdown from "react-markdown";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import UpcomingRoll from "../components/UpcomingRoll/UpcomingRoll";

const LocationPage = ({ data }) => {
  const { frontmatter } = data.page;
  const { latestPosts } = data;
  console.log(data);
  return (
    <Layout>
      <Navbar lang={frontmatter.language} slug={data.page.fields.slug} />
      <StaticImage
        src="../img/about.jpg"
        alt="contact"
        placeholder="blurred"
        objectFit={"cover"}
        layout="fullWidth"
        aspectratio={3 / 1}
      />
      <div className="content">
        <section className="section section--gradient arrow-section-white">
          <h1 className="has-text-centered mb-5">{frontmatter.title}</h1>
          <p
            className="has-text-centered p-2 mb-2"
            style={{ margin: "0 auto", position: "relative" }}
          >
            {frontmatter.description}
          </p>
          <UpcomingRoll {...latestPosts} />
        </section>
      </div>
    </Layout>
  );
};

export default LocationPage;

export const NewsQuery = graphql`
  query NewsById($id: String!, $language: String!) {
    page: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        language
        title
        description
      }
    }
    latestPosts: allMarkdownRemark(
      filter: {
        frontmatter: {
          language: { eq: $language }
          contentType: { eq: "upcoming" }
        }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
            title
            description
          }
        }
      }
    }
  }
`;
