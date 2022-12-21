import React from "react";
import TechnologyStyle from "../technology/TechnologyStyle";
import AgriImg from "../../images/Agri gif.svg";
import line from "../../images/Line 24.svg";
import AgriEllps from "../../images/AgriEllips.svg";
import AgriVector from "../../images/AgriVector.svg";
import circle from "../../images/Ellipse 101.svg";
import agrileaf from "../../images/agrileaf.svg";
import agribranch from "../../images/agribranch.svg";
import { Box, Button, Typography } from "@mui/material";

function Agri() {
  return (
    <TechnologyStyle>
      <img src={line} alt="line" style={{ width: "100%", zIndex: "-1" }} />
      <Box className="techContainer">
        <img
          src={AgriImg}
          alt="Tech Gif"
          style={{ width: "150%", height: "630px", marginRight: "150px" }}
        />
        <Box className="textContainer">
          <Typography variant="h2" className="TechnologyHeading">
            Agri-business to bestow{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #F2EFD3 0%, #358D82 100%)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
                "background-clip": "text",
                "text-fill-color": "transparent",
                "text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              Nature's Love
            </span>
          </Typography>
          <Typography variant="h5" className="Technologytextyle">
            We believe in innovation and excellence hence , our approach in the
            field of technology is focused to relish incredible customer
            experience and stabilising business models for tomorrow.
          </Typography>
          <Button
            variant="outlined"
            className="TechBtnStyle"
            sx={{ border: "2px solid #579181" }}
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
            src={AgriEllps}
            alt="AgriEllps"
            style={{ zIndex: "-1", marginTop: "-85px", width: "150px" }}
          />
          <img
            src={AgriVector}
            alt="AgriVector"
            style={{
              marginTop: "-100px",
              marginBottom: "150px",
              marginLeft: "50px",
            }}
          />
          <img
            src={agrileaf}  
            alt="agrileaf"
            style={{
              marginTop: "-250px",
              marginBottom: "205px",
              marginLeft: "85px",
            }}
          />
          <img
            src={agribranch}
            alt="agribranch"
            style={{
              marginTop: "-240px",
              marginBottom: "195px",
              marginLeft: "53px",
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

export default Agri;
