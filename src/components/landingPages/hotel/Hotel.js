import React from "react";
import HotelStyle from "./HotelStyle";
import line from "../../images/Line 18.svg";
import { Box, Button, Typography } from "@mui/material";
import circle from "../../images/Ellipse 101.svg";
import HotelEllips from "../../images/HotelEllips.svg";
import HotelVector from "../../images/HotelVector.svg";

function Hotel() {
  return (
    <HotelStyle>
      <img
        src={line}
        alt="line"
        style={{ width: "100%", marginTop: "-90px" }}
      />
      <Box className="hotelContainer">
        <Box>
          <img src={HotelEllips} alt="Hotel Ellips" />
          <img
            src={HotelVector}
            alt="Hotel Vector"
            style={{
              marginLeft: "40px",
              marginTop: "-100px",
              marginBottom: "105px",
            }}
          />
        </Box>

        <Box className="textContainer">
          <Typography variant="h2" className="HotelHeading">
            Making
            <br /> accommodations easier
          </Typography>
          <Typography variant="h5" className="Hoteltextyle">
            Introducing capsule hotels in places of extreme need such as
            examination centres and hospitals to provide comfortable and
            convenient accommodation at pocket friendly prices .
          </Typography>
          <Button
            variant="outlined"
            className="hotelBtnStyle"
            sx={{
              fontFamily: "Montserrat Alternates",
              marginTop: "20px",
              padding: "16px 48px",
              fontWeight: 500,
              lineHeight: "20px",
              fontSize: "13px",
              color: "#FFFFFF",
              textAlign: "center",
              borderRadius: "24px",
              border: "2px solid #FFE259",
            }}
          >
            Read more
          </Button>
          <img
            src={circle}
            alt="circle"
            style={{ marginLeft: "-15px", marginBottom: "-18px" }}
          />
        </Box>
      </Box>

      <img src={line} alt="line" style={{ width: "100%", marginTop: '-200px' }} />
    </HotelStyle>
  );
}

export default Hotel;
