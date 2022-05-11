import React from "react";
import Markdown from "react-markdown";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import FullWidthImage from "../components/FullWidthImage";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Content, { HTMLContent } from "../components/Content";

const LocationsPage = ({ data }) => {
  const PageContent = HTMLContent || Content;
  const { frontmatter: page } = data.page;
  const { edges: locations } = data.locations;

  console.log(locations);
  return (
    <Layout>
      <Navbar lang={page.language} slug={data.page.fields.slug} />
      <div className="content">
        <StaticImage
          src="../img/about.jpg"
          alt="contact"
          placeholder="blurred"
          objectFit={"cover"}
          layout="fullWidth"
          aspectratio={3 / 1}
        />
        <section className="section section--gradient arrow-section-white">
          <div className="container">
            <h1 className="title  has-text-weight-light is-bold-light is-size-2 is-size-3-mobile">
              {page.title}
            </h1>
          </div>
        </section>
        <section className="section section--gradient arrow-section-white">
          <h2>{page.language === "gr" ? "Ελλαδα" : "Greek"}</h2>
          {locations
            .filter(
              (loc) =>
                loc.node.frontmatter.country === "gr" &&
                loc.node.fields.slug !== "/halkidiki/"
            )
            .map((location, index) => {
              return (
                <div className="columns">
                  {index % 2 !== 0 && (
                    <div className="column is-4">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: location.node.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${location.node.frontmatter.title}`,
                          width:
                            location.node.frontmatter.featuredimage
                              .childImageSharp.gatsbyImageData.width,
                          height:
                            location.node.frontmatter.featuredimage
                              .childImageSharp.gatsbyImageData.height,
                        }}
                      />
                    </div>
                  )}
                  <div className="column is-8">
                    {/* <h3>
                    <Link to={location.node.fields.slug}>
                      {location.node.frontmatter.title}{" "}
                    </Link>
                  </h3> */}
                    <div className="html">
                      <PageContent
                        className="content"
                        content={location.node.html}
                      />
                    </div>
                  </div>
                  {index % 2 === 0 && (
                    <div className="column is-4">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: location.node.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${location.node.frontmatter.title}`,
                          width:
                            location.node.frontmatter.featuredimage
                              .childImageSharp.gatsbyImageData.width,
                          height:
                            location.node.frontmatter.featuredimage
                              .childImageSharp.gatsbyImageData.height,
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
        </section>
      </div>
    </Layout>
  );
};

export default LocationsPage;

export const LocationsPageQuery = graphql`
  query journalById($id: String!, $language: String!) {
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
    locations: allMarkdownRemark(
      filter: {
        frontmatter: {
          contentType: { eq: "location" }
          language: { eq: $language }
        }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          html
          frontmatter {
            featuredimage {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            }
            title
            country
          }
        }
      }
    }
  }
`;
