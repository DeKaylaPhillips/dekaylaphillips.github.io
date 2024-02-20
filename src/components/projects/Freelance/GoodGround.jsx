import { Container } from "@mui/material";
import ProjectInfo from "../../shared/ProjectInfo";

const GoodGround = () => {
  return (
    <Container maxWidth="lg">
      <ProjectInfo
        other="Freelance Project - WORK IN PROGRESS..."
        client="Good Ground"
        project="Good Ground Web Application"
        stack="TypeScript, Python, React, Django"
        overview="Currently independently developing a full-stack, e-commerce application for purchasing homemade spice blends."
      />
      <Container maxWidth="lg">Screenshots & link to project</Container>
    </Container>
  );
};

export default GoodGround;
