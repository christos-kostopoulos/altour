import React from "react";
import Markdown from "react-markdown";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Content, { HTMLContent } from "../components/Content";

const LocationPage = ({ data }) => {
  const { frontmatter: note } = data.markdownRemark;
  const PageContent = HTMLContent || Content;
  return (
    <Layout>
      <Navbar lang={note.language} slug={data.markdownRemark.fields.slug} />
      <div className="container">
        <h3>{note.title}</h3>
        <div className="html">
          <PageContent className="content" content={data.markdownRemark.html} />
        </div>
      </div>
    </Layout>
  );
};

export default LocationPage;

export const noteQuery = graphql`
  query noteById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        language
        date
      }
    }
  }
`;
