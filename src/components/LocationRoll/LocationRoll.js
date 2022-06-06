import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery, Link } from "gatsby";
import LocationRollItem from "./LocationRollItem";
import Slider from "react-slick";
import "./locationRoll.css";

class LocationRoll extends React.Component {
  render() {
    const { edges: posts } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        {posts && (
          <Slider {...settings}>
            {posts
              .filter(({ node: post }) => post.frontmatter.country !== "al")
              .map(({ node: post }) => (
                <Link key={post.id} to="/locations">
                  <LocationRollItem {...post} />
                </Link>
              ))}
          </Slider>
        )}
      </div>
    );
  }
}

LocationRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default LocationRoll;
