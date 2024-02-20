/* eslint-disable react/no-children-prop */
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = ["PROJECTS"]; // list of pages included in the navigation bar
const websites = ["GitHub", "LinkedIn"]; // list of websites included in the profile dropdown menu

const NavBar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null); // links to the pages in the profile dropdown menu

  const handleOpenWebsitesMenu = (event) => {
    // Opens the profile dropdown menu
    setAnchorElUser(event.currentTarget); // ??
  };

  const handleCloseWebsitesMenu = () => {
    setAnchorElUser(null);
  };

  const getWebsiteURLs = (siteURL) => {
    switch (siteURL) {
      case "GitHub":
        return "https://www.github.com/dekaylaphillips/";
      case "LinkedIn":
        return "https://www.linkedin.com/in/dekayla/";
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ bgcolor: "#B09171" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              m: 2,
              display: "flex",
              fontWeight: 900,
              color: "#724219",
            }}
          >
            DEKAYLA P.
          </Typography>

          <Box sx={{ flexGrow: 15, display: "flex" }}>
            {pages.map((page) => (
              <Typography
                key={page}
                variant="h6"
                component="a"
                href="/projects"
                sx={{
                  m: 2,
                  ml: 0,
                  display: "flex",
                  color: "white",
                }}
              >
                {page}
              </Typography>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Links to personal websites">
              <IconButton onClick={handleOpenWebsitesMenu} sx={{ p: 0 }}>
                <Avatar alt="Initials in avatar icon" children="DP" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseWebsitesMenu}
            >
              {websites.map((website) => (
                <MenuItem
                  key={website}
                  onClick={() =>
                    (window.location.href = getWebsiteURLs(website))
                  }
                >
                  <Typography textAlign="center">{website}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
