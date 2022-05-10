import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        heroImage={getAsset(data.image)}
        heroHeading={data.heroHeading}
        locations={data.locations}
        latest={data.latest}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
