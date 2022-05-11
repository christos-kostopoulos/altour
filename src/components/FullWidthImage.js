import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import useMobile from "../hooks/useMobile";
export default function FullWidthImage(props) {
  const { height = "100vh", img, title, imgPosition = "top left" } = props;
  const { isMobile } = useMobile();
  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          alignItems: "center",
        }}
      >
        <StaticImage
          src="../img/waterfall.jpg"
          alt="contact"
          placeholder="blurred"
          objectFit={"cover"}
          layout="fullWidth"
          aspectratio={3 / 1}
        />
        {title && (
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "absolute",
              // This centers the other elements inside the hero component
              placeItems: "left",
              display: "grid",
              paddingLeft: "10%",
              top: isMobile && "20%",
            }}
          >
            {/* Any content here will be centered in the component */}
            {title && (
              <h1
                className="has-text-weight-bold is-size-4-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  color: "white",
                  lineHeight: "1",
                  fontFamily: "CFPanoptik",
                }}
              >
                {title}
              </h1>
            )}
            <div
              className="is-flex is-justify-content-center"
              style={{ width: "50%" }}
            >
              <Link className="btn mt-4" to="/blog">
                ΠΑΤΗΣΤΕ ΕΔΩ
              </Link>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
};
