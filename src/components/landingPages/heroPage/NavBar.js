import React from "react";
import { AppBar, Tab, Tabs, Toolbar, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NavBarStyle from "./NavBarStyle";


function NavBar() {
  return (
    <NavBarStyle>
      <Box className="headerConatainer">
        <AppBar className="AppBarStyle">
          <Toolbar>
            <Tabs sx={{ marginRight: "auto", color: "white" }}>
              <Tab label="Home" className="TabStyle" />
              <Tab label="Our Industries" className="TabStyle" />
              <Tab label="Our Companies" className="TabStyle" />
            </Tabs>
            <Tabs sx={{ marginLeft: "auto" }}>
              <Tab label="Career" className="TabStyle" />
              <Tab label="Contact" className="TabStyle" />
              <IconButton>
                <SearchIcon className="TabStyle" />
              </IconButton>
            </Tabs>
          </Toolbar>
        </AppBar>
      </Box>
    </NavBarStyle>
  );
}

export default NavBar;
