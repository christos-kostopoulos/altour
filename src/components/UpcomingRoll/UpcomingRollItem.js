import React from "react";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { Link } from "gatsby";

const UpcomingRollItem = (post) => (
  <div className="column is-4" key={post.id}>
    <div
      className="upcoming-card p-3 has-text-centered"
      style={{ backgroundColor: "#237da5"}}
    >
      <header>
        <h3 className="has-text-white is-size-3">{post.frontmatter.title}</h3>
        <p className="has-text-white has-text-weight-light pb-2">
          {post.frontmatter.description}
        </p>
      </header>
      <div className="upcoming-card-image">
        {post.frontmatter.image ? (
          <div className="featured-thumbnail">
            <PreviewCompatibleImage
              imageInfo={{
                image: post.frontmatter.image,
                alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                width:
                  post.frontmatter.image.childImageSharp.gatsbyImageData
                    .width,
                height:
                  post.frontmatter.image.childImageSharp.gatsbyImageData
                    .height,
              }}
            />
          </div>
        ) : null}
      </div>
    </div>
  </div>
);

export default UpcomingRollItem;
