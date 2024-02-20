import { Container } from "@mui/material";
import ProjectInfo from "../../shared/ProjectInfo";
import ImageSectionTitle from "../../images/ImageSectionTitle";
import Image from "../../images/Image";

const TCPServer = () => {
  return (
    <Container maxWidth="lg">
      <ProjectInfo
        company="8th Light"
        project="TCP Server (Apprenticeship)"
        stack="TypeScript, Node.js"
        overview="Programmed a TCP server to handle network echo requests and
        responses, showcasing network protocol understanding and asynchronous
        programming."
      />
      <ImageSectionTitle title="TCP Server Source Code Snippet" />
      <Container maxWidth="lg">
        <Image
          alt="Server Source Code Snippet"
          src="/Server Source Code (TCP Server).png"
        />
      </Container>
      <ImageSectionTitle title="Client Handler Source Code Snippet" />
      <Container maxWidth="lg">
        <Image
          alt="Client Handler Source Code Snippet"
          src="/Client Source Code (TCP Server).png"
          imgHeight="32rem"
        />
      </Container>
      <ImageSectionTitle title="Server (Terminal View)" />
      <Container maxWidth="lg">
        <Image
          alt="Established TCP connection terminal view"
          src="/Server Terminal (TCP Server).png"
          imgHeight="10rem"
        />
      </Container>
      <ImageSectionTitle title="Echoed Response from Server to Client (Terminal View)" />
      <Container maxWidth="lg">
        <Image
          alt="Server response echoed back to client terminal view"
          src="/Client Terminal (TCP Server).png"
          imgHeight="12rem"
        />
      </Container>
    </Container>
  );
};

export default TCPServer;
