import React from "react";
import Markdown from "react-markdown";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import FullWidthImage from "../components/FullWidthImage";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Content, { HTMLContent } from "../components/Content";
import Gallery from "../components/Gallery";
const LocationsPage = ({ data }) => {
  const PageContent = HTMLContent || Content;
  const { frontmatter: page } = data.page;
  const { edges: locations } = data.locations;

  const sarandaporo =
    locations.length > 0 &&
    locations.find((loc) => loc.node.fields.slug.indexOf("/sarandaporo/") > -1);
  const benja =
    locations.length > 0 &&
    locations.find((loc) => loc.node.fields.slug.indexOf("/benja/") > -1);

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
          <h1 className="title  has-text-weight-light is-bold-light is-size-2 is-size-3-mobile">
            {page.title}
          </h1>
          <h1>
            {page.language === "gr"
              ? "Ελλάδα"
              : page.language === "al"
              ? "Greqia"
              : "Greece"}
          </h1>
          {locations
            .filter(
              (loc) =>
                loc.node.frontmatter.country === "gr" &&
                loc.node.fields.slug.indexOf("/halkidiki/") > -1 === false
            )
            .map((location, index) => {
              return (
                <div className="columns" key={index}>
                  {index % 2 !== 0 && (
                    <div className="column is-4">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: location.node.frontmatter.image,
                          alt: `featured image thumbnail for post ${location.node.frontmatter.title}`,
                          width:
                            location.node.frontmatter.image.childImageSharp
                              .gatsbyImageData.width,
                          height:
                            location.node.frontmatter.image.childImageSharp
                              .gatsbyImageData.height,
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
                          image: location.node.frontmatter.image,
                          alt: `featured image thumbnail for post ${location.node.frontmatter.title}`,
                          width:
                            location.node.frontmatter.image.childImageSharp
                              .gatsbyImageData.width,
                          height:
                            location.node.frontmatter.image.childImageSharp
                              .gatsbyImageData.height,
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          <h1>
            {page.language === "gr"
              ? "Αλβανία"
              : page.language === "al"
              ? "Shqipëri"
              : "Albania"}
          </h1>
          {/* SARANTOPORO PLACE */}
          {sarandaporo ? (
            <div className="columns">
              <div className="column is-8">
                <div className="html">
                  <PageContent
                    className="content"
                    content={sarandaporo.node.html}
                  />
                </div>
              </div>

              <div className="column is-4">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: sarandaporo.node.frontmatter.image,
                    alt: `featured image thumbnail for post ${sarandaporo.node.frontmatter.title}`,
                    width:
                      sarandaporo.node.frontmatter.image.childImageSharp
                        .gatsbyImageData.width,
                    height:
                      sarandaporo.node.frontmatter.image.childImageSharp
                        .gatsbyImageData.height,
                  }}
                />
              </div>
            </div>
          ) : null}
          {/* Benga PLACE */}
          {benja ? (
            <div className="columns">
              <div className="column is-4">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: benja.node.frontmatter.image,
                    alt: `featured image thumbnail for post ${benja.node.frontmatter.title}`,
                    width:
                      benja.node.frontmatter.image.childImageSharp
                        .gatsbyImageData.width,
                    height:
                      benja.node.frontmatter.image.childImageSharp
                        .gatsbyImageData.height,
                  }}
                />
              </div>
              <div className="column is-8">
                <div className="html">
                  <PageContent className="content" content={benja.node.html} />
                </div>
              </div>
            </div>
          ) : null}
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
            image {
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
