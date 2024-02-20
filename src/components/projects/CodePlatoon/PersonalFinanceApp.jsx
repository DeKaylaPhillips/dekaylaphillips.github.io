import { Container } from "@mui/material";
import ProjectInfo from "../../shared/ProjectInfo";

const PersonalFinanceApp = () => {
  return (
    <Container maxWidth="lg">
      <ProjectInfo
        school="Code Platoon"
        project="Personal Finance Application"
        stack="JavaScript, Python, React, Flask, PostgreSQL"
        overview="Developed a full-stack application for personal finance
            tracking and analysis, featuring dynamic user interfaces with React and
            a robust backend using Django."
      />
      <Container maxWidth="lg">Screenshots & link to project</Container>
    </Container>
  );
};

export default PersonalFinanceApp;
