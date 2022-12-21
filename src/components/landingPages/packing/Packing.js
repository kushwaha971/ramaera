import { Box, Button, Typography } from "@mui/material";
import React from "react";
import TechnologyStyle from "../technology/TechnologyStyle";
import line from "../../images/Line 20.svg";
import packingImg from "../../images/Packing Gif.svg";
import circle from "../../images/Ellipse 101.svg";
import packigEllipse from "../../images/PackingEllipse.svg";
import vector from "../../images/PackingVector.svg";

function Packing() {
  return (
    <TechnologyStyle>
      <img src={line} alt="line" style={{ width: "100%", zIndex: "-1" }} />
      <Box className="techContainer">
        <img
          src={packingImg}
          alt="Tech Gif"
          style={{ width: "150%", height: "630px", marginRight: "150px" }}
        />
        <Box className="textContainer">
          <Typography variant="h2" className="TechnologyHeading">
            Packaging industry for business
            <span style={{ color: "#EACDA3" }}>growth</span>
          </Typography>
          <Typography variant="h5" className="Technologytextyle">
            We provide packaging solutions to help your business flourish with
            boosted outreach. Ensuring the protection, containment, and
            communication of packaged projects is our foremost priority.
          </Typography>
          <Button
            variant="outlined"
            className="TechBtnStyle"
            sx={{ border: "2px solid #EACDA3" }}
          >
            Read more
          </Button>
          <img
            src={circle}
            alt="circle"
            style={{ marginLeft: "-15px", marginBottom: "-18px" }}
          />
        </Box>
        <Box sx={{ marginLeft: "-70px" }}>
          <img
            src={packigEllipse}
            alt="packigEllipse"
            style={{ zIndex: "-1", marginTop: "-85px", width: "150px" }}
          />
          <img
            src={vector}
            alt="vecotr"
            style={{
              marginTop: "-100px",
              marginBottom: "150px",
              marginLeft: "55px",
            }}
          />
        </Box>
      </Box>
      <img
        src={line}
        alt="line"
        style={{
          width: "100%",
          zIndex: "-1",
          marginTop: "-400px",
          marginBottom: "90px",
        }}
      />
    </TechnologyStyle>
  );
}

export default Packing;
