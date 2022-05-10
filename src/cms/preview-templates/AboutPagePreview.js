import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about";

const AboutPagePreview = ({ entry, getAsset, widgetFor }) => (
  <AboutPageTemplate
    // content={widgetFor("body")}
    image={getAsset(entry.getIn(["data", "image"]))}
    intro={{
      heading: entry.getIn(["data", "intro", "heading"]),
      image: {
        image: getAsset(entry.getIn(["data", "intro", "image", "image"])),
        alt: entry.getIn(["data", "intro", "image", "alt"]),
      },
      body: entry.getIn(["data", "intro", "body"]),
    }}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
