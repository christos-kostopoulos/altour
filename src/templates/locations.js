import React from "react";
import Markdown from "react-markdown";
import { graphql, Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import FullWidthImage from "../components/FullWidthImage";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Content, { HTMLContent } from "../components/Content";

const JournalPage = ({ data }) => {
  const PageContent = HTMLContent || Content;
  const { frontmatter: page } = data.page;
  const { edges: blogs } = data.blogs;

  const heroImage = getImage(page.image) || page.image;
  console.log(page);
  return (
    <Layout>
      <Navbar lang={page.language} slug={data.page.fields.slug} />
      <div className="content">
        <FullWidthImage img={heroImage} />
        <section className="section section--gradient arrow-section-white">
          <div className="container">
            <h2 className="title  has-text-weight-light is-bold-light is-size-2 is-size-3-mobile">
              {page.title}
            </h2>
            <PageContent className="content" content={data.page.html} />
          </div>
        </section>
        {/* <section className="section section--gradient arrow-section-white">
          <div className="container">
            <h1>{page.title}</h1>
          </div>
          
          {blogs.map((post) => (
            <Link to={post.node.fields.slug}>
              <div className="note">
                <h3>{post.node.frontmatter.title}</h3>
                <div className="html">
                  <Markdown source={post.node.excerpt} escapeHtml={false} />
                </div>
              </div>
            </Link>
          ))}
        </section> */}
      </div>
    </Layout>
  );
};

export default JournalPage;

export const journalPageQuery = graphql`
  query journalById($id: String!, $language: String!) {
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
    blogs: allMarkdownRemark(
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
          excerpt(pruneLength: 80)
          fields {
            slug
          }
          frontmatter {
            language
            title
          }
        }
      }
    }
  }
`;
