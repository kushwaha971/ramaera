import React from "react";
import FmcgStyle from "./FmcgStyle";
import fmcgEllipse from "../../images/fmcgEllipse.svg";
import fmcgVector from "../../images/fmcgVector.svg";
import fmcgGif from "../../images/Fmcg Gif.svg";
import line from "../../images/Line 22.svg";
import { Box, Button, Typography } from "@mui/material";
import circle from "../../images/Ellipse 101.svg";

function Fmcg() {
  return (
    <FmcgStyle>
      <img
        src={line}
        alt="line"
        style={{ width: "100%", zIndex: "-1", marginTop: "-80px" }}
      />
      <Box className="FmcgContainer">
        <Box className="fmcgtextContainer">
          <Box>
            <img src={fmcgEllipse} alt="fmcgEllpise" />
            <img
              src={fmcgVector}
              alt="fmcgVector"
              style={{
                marginLeft: "40px",
                marginTop: "-100px",
                marginBottom: "105px",
              }}
            />
          </Box>
          <Box>
            <Typography
              variant="h2"
              className="FmcgHeading"
              sx={{
                background: "linear-gradient(90deg, #F2EFD3 0%, #358D82 100%)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
                "background-clip": "text",
                "text-fill-color": "transparent",
                "text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              Offering the best with <br />
              FMCG industry
            </Typography>
            <Typography variant="h4" className="FmcgtextStyle">
              Ramaera FMCG industry has commenced an extensive range of FMCG to
              make your days more than ordinary. We plan to offer you nothing
              less than the best.
            </Typography>
            <Button
              variant="outlined"
              className="FmcgBtnStyle"
              sx={{ border: "2px solid #F2EFD3" }}
            >
              Read More
            </Button>
            <img
              src={circle}
              alt="circle"
              style={{ marginLeft: "-15px", marginBottom: "-18px" }}
            />
          </Box>
        </Box>
        <img src={fmcgGif} alt="fmcgGif" style={{marginTop: '-300px'}}/>
      </Box>
      <img src={line} alt="line" style={{ width: "100%", zIndex: "-1",marginTop: '-150px' }} />
    </FmcgStyle>
  );
}

export default Fmcg;
