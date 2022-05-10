import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import watermark from "../img/watermark-about.svg";

import ReactMarkdown from "react-markdown";
import FullWidthImage from "../components/FullWidthImage";
import { StaticImage } from "gatsby-plugin-image";
import Navbar from "../components/Navbar";
// eslint-disable-next-line
export const AboutPageTemplate = ({
  image,
  intro,
  sectionMinistry,
  thermalSprings,
  goals,
  sustainable,
}) => {
  const heroImage = getImage(image) || image;
  const rightImage = getImage(intro.image) || intro.image;
  const ministryImage = getImage(sectionMinistry.image);
  return (
    <div className="content">
      <FullWidthImage img={heroImage} />
      <section className="section section--gradient arrow-section-white">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <h2
                style={{ fontSize: "3.2rem" }}
                className="title  has-text-weight-light is-bold-light"
              >
                {intro.heading}
              </h2>
              <ReactMarkdown>{intro.body}</ReactMarkdown>
            </div>
            <div className="column is-4">
              <GatsbyImage
                image={rightImage}
                alt="right image"
                style={{ height: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="has-background-primary p-5 arrow-section-primary">
        <div className="container">
          <h3 className="has-text-weight-semibold is-size-2 has-text-white mt-5">
            {sectionMinistry.heading}
          </h3>
          <div className="columns pt-2 pb-5">
            <div className="column is-6">
              <GatsbyImage
                image={ministryImage}
                alt="mininstry image"
                style={{ height: "100%" }}
              />
            </div>
            <div className="column is-6">
              <div className="has-text-white">
                <ReactMarkdown>{sectionMinistry.body}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container">
          <h3 className="has-text-weight-semibold has-text-centered is-size-2 pt-5">
            {thermalSprings.heading}
          </h3>
          <ReactMarkdown>{thermalSprings.body}</ReactMarkdown>
          <div className="columns mb-5" style={{ position: "relative" }}>
            <div className="column is-10">
              <h1 className="has-text-right has-text-weight-light ">
                {goals.heading}
              </h1>
              <ReactMarkdown>{goals.body}</ReactMarkdown>
            </div>
            <img
              src={watermark}
              alt="about-us"
              style={{ position: "absolute", right: "0px", width: "50%" }}
            />
          </div>
        </div>
      </section>
      <section className="has-background-primary mt-5 pb-5 pt-5">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <h3 className="has-text-weight-semibold is-size-2 has-text-white mt-5">
                {sustainable.heading}
              </h3>
              <div className="has-text-white">
                <ReactMarkdown>{sustainable.body}</ReactMarkdown>
              </div>
            </div>
            <div className="column is-4">
              <StaticImage
                className="image-full-height"
                src="../img/bg-2.jpg"
                alt="A background"
                placeholder="blurred"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  intro: PropTypes.shape({
    heading: PropTypes.string,
    body: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  sectionMinistry: PropTypes.shape({
    heading: PropTypes.string,
    body: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
};

const AboutPage = ({ data }) => {
  const { frontmatter: content } = data.content;
  return (
    <Layout>
      <Navbar lang={content.language} slug={data.page.fields.slug} />
      <AboutPageTemplate
        image={content.image}
        intro={content.intro}
        sectionMinistry={content.sectionMinistry}
        thermalSprings={content.thermalSprings}
        goals={content.goals}
        sustainable={content.sustainable}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!, $language: String!) {
    page: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
    }
    content: markdownRemark(
      frontmatter: {
        type: { eq: 1 }
        templateKey: { eq: "templates/about" }
        language: { eq: $language }
      }
    ) {
      frontmatter {
        language
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        intro {
          heading
          body
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED)
            }
          }
        }
        sectionMinistry {
          heading
          body
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED)
            }
          }
        }
        thermalSprings {
          heading
          body
        }
        goals {
          heading
          body
        }
        sustainable {
          heading
          body
        }
      }
    }
  }
`;
