import PropTypes from "prop-types";

const Image = ({ alt, src, imgHeight = "30rem" }) => {
  return (
    <img
      alt={alt}
      src={src}
      style={{ height: imgHeight, marginBottom: "2rem" }}
    />
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  imgHeight: PropTypes.string,
};
export default Image;
