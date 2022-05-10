import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import UpcomingRollItem from "./UpcomingRollItem";
import "./upcoming.css";

class UpcomingRoll extends React.Component {
  render() {
    const { edges: posts } = this.props;


    return (
      <div className="columns is-multiline" style={{ position: "relative", zIndex: '15' }}>
        {posts &&
          posts.map(({ node: post }) => (
            <UpcomingRollItem key={post.id} {...post} />
          ))}
      </div>
    );
  }
}

UpcomingRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};


export default UpcomingRoll