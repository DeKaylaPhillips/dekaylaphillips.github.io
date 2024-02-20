import { Container } from "@mui/material";
import ProjectInfo from "../../shared/ProjectInfo";
import ImageSectionTitle from "../../images/ImageSectionTitle";
import Image from "../../images/Image";

const CRUDFileHandlingSystem = () => {
  return (
    <Container>
      <ProjectInfo
        company="8th Light"
        project="CRUD File Handling System (Apprenticeship)"
        stack="Python, Flask"
        overview="Designed and implemented a Python-based CRUD file management
            system, complete with custom data validation and formatting
            capabilities, to facilitate efficient data storage and retrieval
            operations."
      />
      <ImageSectionTitle title="CRUD File Handling Source Code Snippets"/>
      <Container maxWidth="lg">
        <Image alt="Create/Read operations source code snippet" src="/CRUD File Handler - CreateReadOperations.png" />
        <Image alt="Update/Delete operations source code snippet" src="/CRUD File Handler - UpdateDelete Operations.png" imgHeight="23.5rem"/>
      </Container>
    </Container>
  );
};

export default CRUDFileHandlingSystem;
