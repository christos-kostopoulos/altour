/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import GalleryImg from "./GalleryImage";
import useMobile from "../hooks/useMobile";

const Gallery = ({ gallery }) => {
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  });
  const { isMobile } = useMobile();
  useEffect(
    () =>
      isMobile &&
      setSettings({
        ...settings,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      }),
    [isMobile]
  );
  return (
    <div className="mt-2" style={{ marginBottom: "8rem" }}>
      <SimpleReactLightbox>
        <SRLWrapper>
          <Slider {...settings}>
            {gallery.map((image, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index} className="pl-1 pr-1">
                <GalleryImg alt={image} filename={image} isMobile />
              </div>
            ))}
          </Slider>
        </SRLWrapper>
      </SimpleReactLightbox>
    </div>
  );
};

export default Gallery;

Gallery.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gallery: PropTypes.array.isRequired,
};
