import React from "react";
import TechnologyStyle from "./TechnologyStyle";
import line from "../../images/Line 16.svg";
import TechImg from "../../images/Tech gif.svg";
import { Box, Button, Typography } from "@mui/material";
import ellips from "../../images/Ellipse 1.svg";
import vector from "../../images/Vector.svg";
import circle from "../../images/Ellipse 101.svg";

function Technology() {
  return (
    <TechnologyStyle>
      <img src={line} alt="line" style={{ width: "100%", zIndex: "-1" }} />
      <Box className="techContainer">
        <img
          src={TechImg}
          alt="Tech Gif"
          style={{ width: "150%", height: "630px", marginRight: "150px" }}
        />
        <Box className="textContainer">
          <Typography variant="h2" className="TechnologyHeading">
            Unleashing the strength of{" "}
            <span style={{ color: "#BF5AE0" }}>Technology</span>
          </Typography>
          <Typography variant="h5" className="Technologytextyle">
            We believe in innovation and excellence hence , our approach in the
            field of technology is focused to relish incredible customer
            experience and stabilising business models for tomorrow.
          </Typography>
          <Button
            variant="outlined"
            className="TechBtnStyle"
            sx={{ border: "2px solid #BF5AE0" }}
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
            src={ellips}
            alt="ellips"
            style={{ zIndex: "-1", marginTop: "-80px", width: "150px" }}
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

export default Technology;
