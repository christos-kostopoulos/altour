import React from "react";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import magnifier from "../../img/magnifier.png";
import { Link } from "gatsby";

const LocationRollItem = (post) => (
  <div className="card">
    <div className="card-image">
      {post.frontmatter.featuredimage ? (
        <div className="featured-thumbnail">
          <PreviewCompatibleImage
            imageInfo={{
              image: post.frontmatter.featuredimage,
              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
              width:
                post.frontmatter.featuredimage.childImageSharp.gatsbyImageData
                  .width,
              height:
                post.frontmatter.featuredimage.childImageSharp.gatsbyImageData
                  .height,
            }}
          />
        </div>
      ) : null}
    </div>
    <div className="card-description-container">
      <div className="card-description-content is-flex-direction-column is-justify-content-center p-2">
        <h3 className="is-text-5 has-text-centered">
          {post.frontmatter.title}
        </h3>
        <img src={magnifier} alt="magnifier" style={{ width: "30px" }} />
      </div>
    </div>
  </div>
);

export default LocationRollItem;
