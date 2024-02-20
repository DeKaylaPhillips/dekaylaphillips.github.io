import { Container } from "@mui/material";
import ProjectInfo from "../../shared/ProjectInfo";

const ECommerceStoreApp = () => {
  return (
    <Container>
      <ProjectInfo
        school="Code Platoon"
        project="E-Commerce Store Application"
        stack="Python, Django, HTML/CSS with Django templates for
        client-side rendering"
        overview="Built a responsive e-commerce platform with product listings,
        shopping cart, and order management, utilizing Django's templating
        engine for front-end rendering."
      />
      <Container maxWidth="lg">Screenshots & link to project</Container>
    </Container>
  );
};

export default ECommerceStoreApp;
