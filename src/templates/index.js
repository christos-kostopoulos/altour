import React from "react";
import Markdown from "react-markdown";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import FullWidthImage from "../components/FullWidthImage";

import watermark1 from "../img/watermark-home-1.svg";
import watermark2 from "../img/watermark-home-2.svg";
import watermark3 from "../img/watermark-3.png";

const IndexPage = ({ data }) => {
  const { frontmatter: content } = data.content;
  const heroImage = getImage(content.image) || content.image;

  return (
    <Layout>
      <Navbar lang={content.language} slug={data.page.fields.slug} />
      <FullWidthImage img={heroImage} title={content.heroHeading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="content">
            <div className="columns">
              <div className="column is-8" style={{ position: "relative" }}>
                <img src={watermark3} alt="Facebook" />
              </div>
              <div className="column has-text-right is-4">
                <h3 className="has-text-weight-light is-size-1 is-size-2">
                  {content.projectHeading}
                </h3>
                <p
                  style={{ lineHeight: "2.5rem" }}
                  className="is-size-5 is-size-6 has-text-weight-semibold"
                >
                  {content.projectDescription}
                </p>
                <Link to="/about">
                  <button className="button is-primary">READ MORE</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h1 className="has-text-weight-light is-size-1 is-size-3-mobile has-text-centered mb-2">
          {content.locations.title}
        </h1>
        <p
          className="has-text-centered has-text-weight-semibold pb-3"
          style={{ width: "80%", margin: "0 auto" }}
        >
          {content.locations.description}
        </p>
        {/* <LocationRoll /> */}
      </div>
      <div
        className="mt-2 p-6 has-background-primary latest-news-section"
        style={{ position: "relative" }}
      >
        <h3
          className="has-text-weight-light is-size-1 has-text-centered has-text-white"
          style={{ position: "relative" }}
        >
          {content.latest.title}
        </h3>
        <p
          className="has-text-weight-light has-text-centered has-text-white p-2 mb-2"
          style={{ width: "60%", margin: "0 auto", position: "relative" }}
        >
          {content.latest.description}
        </p>
        {/* <UpcomingRoll /> */}
      </div>
      {/* <div className="content">
        <h1>{content.description}</h1>
        <div className="html">
          <Markdown source={data.page.html} escapeHtml={false} />
        </div>
      </div> */}
    </Layout>
  );
};

export default IndexPage;

export const indexQuery = graphql`
  query IndexById($id: String!, $language: String!) {
    page: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      html
    }
    content: markdownRemark(
      frontmatter: {
        type: { eq: 1 }
        templateKey: { eq: "templates/index" }
        language: { eq: $language }
      }
    ) {
      frontmatter {
        language
        heroHeading
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        projectHeading
        projectDescription
        locations {
          title
          description
        }
        latest {
          title
          description
        }
      }
    }
  }
`;
