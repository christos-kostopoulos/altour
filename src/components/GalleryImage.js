import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const GalleryImg = ({ filename, alt }) => {
  const data = useStaticQuery(graphql`
    {
      images: allFile(
        filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }
      ) {
        edges {
          node {
            relativePath
            name
            publicURL
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  console.log(data, filename)
  const image = data.images.edges.find((n) =>
    n.node.relativePath.includes(filename)
  );

  return (
    <a href={image.node.publicURL}>
      <GatsbyImage
        image={getImage(image.node.childrenImageSharp[0])}
        alt={alt}
        // objectFit="cover"
        style={{
          height: "400px",
        }}
      />
    </a>
  );
};

GalleryImg.propTypes = {
  filename: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default GalleryImg;
