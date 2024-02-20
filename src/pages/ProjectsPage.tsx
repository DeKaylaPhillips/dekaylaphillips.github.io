import React from "react";
import Container from "@mui/material/Container";
import Archa from "../components/projects/8thLight/Archa";
import TCPServer from "../components/projects/8thLight/TCPServer";
import CRUDFileHandlingSystem from "../components/projects/8thLight/CRUDFileHandlingSystem";

const ProjectsPage = () => {
  return (
    // TODO: Add new link props for project info component to connect to repos.
    <Container maxWidth="lg">
      <Archa />
      <TCPServer />
      <CRUDFileHandlingSystem />
    </Container>
  );
};

export default ProjectsPage;
