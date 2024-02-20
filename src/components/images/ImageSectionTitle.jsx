import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

const ImageSectionTitle = ({ title }) => {
  return (
    <Typography
      variant="body1"
      component="div"
      align="center"
      sx={{ margin: "1rem 0" }}
    >
      {title}
    </Typography>
  );
};

ImageSectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ImageSectionTitle;
