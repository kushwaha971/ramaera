import { Box } from "@mui/system";
import React from "react";
import NavBar from "./NavBar";
import logo from "../../images/logo ramaera 1.svg";
import Ramaera from "../../images/Ramaera Industries.svg";
import { Button, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import HeroPageStyle from "./HeroPageStyle";

function HeroPage() {
  return (
    <HeroPageStyle>
      <Box className="headerConatainer">
        <Box>
          <img src={logo} alt="logo" className="logoStyle" />
        </Box>
        <Box>
          <NavBar />
        </Box>
      </Box>
      <Box className="container">
        <Box className="IconStyle">
          <TwitterIcon sx={{ marginTop: "45px" }} />
          <InstagramIcon sx={{ marginTop: "45px" }} />
          <FacebookIcon sx={{ marginTop: "45px" }} />
        </Box>
        <Box className="textContainer">
          <img src={Ramaera} alt="Ramera" />
          <Typography variant="h3" className="heroStextStyle">
            An incredible multi-industrial approach oriented towards financial
            independence, customer focus and serving the best quality to the
            people.
          </Typography>
        </Box>
      </Box>
      <Button variant="contained" className="btnStyle">
        Explore more
      </Button>
    </HeroPageStyle>
  );
}

export default HeroPage;
