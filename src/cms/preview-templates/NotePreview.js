import React from "react";
import PropTypes from "prop-types";
import Content, { HTMLContent } from "../../components/Content";
import ReactMarkdown from "react-markdown";

const NotePreview = ({ entry, getAsset }) => {
  const PageContent = HTMLContent || Content;
  const data = entry.get("data").toJS();
  console.log(getAsset(entry.getIn(["data", "featuredimage"])))
  return (
    <div className="cms-device-box">
      <div className="cms-device-box-border">
        <img src={getAsset(entry.getIn(["data", "featuredimage"])).url} alt=""/>
        <h1 className="is-spaced">{entry.getIn(["data",  "title"])}</h1>
        <PageContent className="content" content={entry.getIn(["data",  "body"])} />
      </div>
    </div>
  );
};

NotePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default NotePreview;
