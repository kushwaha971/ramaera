import React from "react";
import FmcgStyle from "../FMCG/FmcgStyle";
import ecomrce from "../../images/ecomrce gif.svg";
import line from "../../images/Line 27.svg";
import Icon from "../../images/EcommerceIcon.svg";
import circle from "../../images/Ellipse 101.svg";
import { Box, Button, Typography } from "@mui/material";

function Ecommerce() {
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
            <img src={Icon} alt="Icon" />
          </Box>
          <Box>
            <Typography
              variant="h2"
              className="FmcgHeading"
              sx={{ color: "#FFFFFF" }}
            >
              Get all your essentials in <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #B4DFFD 0%, #EFB79B 100%)",
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                  "background-clip": "text",
                  "text-fill-color": "transparent",
                  "text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  marginTop: "20px",
                }}
              >
                one place
              </span>
            </Typography>
            <Typography variant="h4" className="FmcgtextStyle">
              Ramaera Supermart is an online customer oriented marketplace to
              motivated to provide everything you need right at one place under
              the comfort of your homes.
            </Typography>
            <Button
              variant="outlined"
              className="FmcgBtnStyle"
              sx={{ border: "2px solid #9796F0" }}
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
        <img
          src={ecomrce}
          alt="ecomrce"
          style={{ width: "80%", marginTop: "-350px" }}
        />
      </Box>
      <img
        src={line}
        alt="line"
        style={{ width: "100%", zIndex: "-1", marginTop: "-110px" }}
      />
    </FmcgStyle>
  );
}

export default Ecommerce;
