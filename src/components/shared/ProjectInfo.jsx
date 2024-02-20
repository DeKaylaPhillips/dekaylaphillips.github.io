import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

const ProjectInfo = ({
  company,
  client,
  school,
  other,
  project,
  stack,
  overview,
}) => {
  let label = company ? "Company" : school ? "School" : null;

  if (!label && other) {
    label = "Project Type";
  }

  return (
    <Typography
      variant="body2"
      component="div"
      align="left"
      sx={{ marginTop: "1rem" }}
    >
      {label}: {company || school || other} <br />
      {(client && `Client: ${client}`) || (!client && `Client: N/A`)} <br />
      Project: {project} <br />
      Technologies: {stack} <br />
      Overview: {overview}
    </Typography>
  );
};

ProjectInfo.propTypes = {
  company: PropTypes.string,
  client: PropTypes.string,
  school: PropTypes.string,
  other: PropTypes.string, // If code not developed within a company or school setting (i.e. freelance work, personal/side projects, etcetc...)
  project: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  overview: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
};

export default ProjectInfo;
