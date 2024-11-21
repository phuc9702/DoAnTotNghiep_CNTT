import React, { useState } from "react";
import PropTypes from "prop-types";

const Image = ({ src, fallbackSrc, alt = "ALT", ...props }) => {
  const [imageUrl, setImageUrl] = useState(src);
  return (
    <img
      src={imageUrl}
      onError={() => setImageUrl(fallbackSrc)}
      alt={alt}
      {...props}
    />
  );
};

export default Image;
Image.prototypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  fallbackSrc: PropTypes.string.isRequired,
};
