import React from "react";
import HeadingStyle from "./HeadingStyle";
import polygon from "../../images/Polygon 3.svg";
import mainHeading from "../../images/Main Heading.svg";
import { Box, Typography } from "@mui/material";

function Heading() {
  return (
    <HeadingStyle>
      <Box className="headingStyleContainer">
        <Box>
          <img src={polygon} alt="plygon" style={{ width: "90%" }} />
        </Box>
        <Box className="textContainer">
          <img src={mainHeading} alt="hrading" className="mainHeadingStyle" />
          <Typography variant="h3" className="textStyle">
            We are aiming to be a part of the major industrialisation drive in
            India and embarking our presence in every significant industrial
            domain including IT.
          </Typography>
        </Box>
      </Box>
    </HeadingStyle>
  );
}

export default Heading;
