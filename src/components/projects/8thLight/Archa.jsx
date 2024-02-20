import { Container, Typography } from "@mui/material";
// import Typography from "@mui/material/Typography";
import { List, ListItem } from "@mui/material";
import ProjectInfo from "../../shared/ProjectInfo";
import ImageSectionTitle from "../../images/ImageSectionTitle";
import Image from "../../images/Image";

const Archa = () => {
  return (
    <Container maxWidth="lg">
      <ProjectInfo
        company="8th Light"
        client="AllCampus"
        project="Archa CRM"
        stack="TypeScript, Python, React, Flask, PostgreSQL"
        overview="Spearheaded the modernization of client's marketing events
        interface, significantly enhancing user experience and data management
        capabilities within their platform, Archa."
      />
      <Typography
        variant="body2"
        component="div"
        align="left"
        sx={{ marginTop: "1rem" }}
      >
        Key Contributions:
        <List>
          <ListItem>
            UI/UX Redesign: Revitalized the marketing events report page with
            updated styles aligning with the new UX guidelines, improving
            aesthetic appeal and user interaction.
          </ListItem>
          <ListItem>
            Navigation Refactoring: Streamlined user navigation by elevating the
            marketing events summary from a nested child to a parent menu item,
            facilitating immediate access upon login.
          </ListItem>
          <ListItem>
            Instructional Integration: Upgraded instructional content for
            creating marketing events by embedding a viewable and downloadable
            guide directly on the marketing event&apos;s page through an
            interactive modal, previously only accessible via a nested submenu.
          </ListItem>
          <ListItem>
            Event Creation Workflow: Implemented a multi-modal workflow for
            adding marketing events, which includes a validation-enabled form
            for inputting event details and a subsequent step for uploading
            attendance data via CSV files.
          </ListItem>
          <ListItem>
            Data Upload Enhancement: Simplified the data upload process by
            allowing direct CSV file submissions on the marketing events page,
            removing the need to navigate to secondary menus.
          </ListItem>
          <ListItem>
            Real-Time Feedback and Updates: Established a responsive feedback
            system that confirms successful event and data submissions with a
            &apos;Success&apos; modal and instantly refreshes the data table
            with new information.
          </ListItem>
        </List>
      </Typography>

      <ImageSectionTitle title="Before Marketing Events Page Revamp" />
      <Container maxWidth="lg">
        <Image alt="Before marketing event revamp (1)" src="/MERP_1.png" />
        <Image
          alt="Before marketing event revamp (2)"
          src="/MERP_2.png"
          imgHeight="29rem"
        />
      </Container>

      <ImageSectionTitle title="After Marketing Events Page Revamp" />
      <Container maxWidth="lg">
        <Image
          alt="After marketing event revamp (1)"
          src="/MERP_3.png"
          imgHeight="30.5rem"
        />
        <Image
          alt="After marketing event revamp (2)"
          src="/MERP_4.png"
          imgHeight="31rem"
        />
        <Image alt="After marketing event revamp (3)" src="/MERP_5.png" />
        <Image alt="After marketing event revamp (4)" src="/MERP_6.png" />
        <Image alt="After marketing event revamp (5)" src="/MERP_7.png" />
        <Image
          alt="After marketing event revamp (6)"
          src="/MERP_8.png"
          imgHeight="28rem"
        />
      </Container>
    </Container>
  );
};

export default Archa;
