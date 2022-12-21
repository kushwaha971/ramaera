import { Box, styled } from "@mui/material";
import bgImage from "../../images/bg.svg";

const HeroPageStyle = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${bgImage})`,
  height: "120vh",
  width: "100%",
  backgroundRepeat: "no-repeat",
  ".headerConatainer": {
    display: "flex",
  },

  subHeadingStyle: {
    fontFamily: "Montserrat Alternates",
    fontSize: "23px",
    color: "#FFFFFF",
    textAlign: "center",
  },
  ".container": {
    display: "flex",
    flexDirection: "row",
    marginTop: "90px",
  },

  ".textContainer": {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
  ".IconStyle": {
    display: "flex",
    flexDirection: "column",
    color: "white",
    marginLeft: "80px",
    marginTop: "90px",
  },
  ".btnStyle": {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "30px",
    padding: "16px 48px",
    background: `linear-gradient(90deg, #F9D423 0%, #E65C00 100%)`,
    border: "2px solid #FFFFFF",
    borderRadius: "24px",
  },
  ".logoStyle": {
    marginLeft: "80px",
    marginTop: "20px",
    height: "100px",
    weight: "100px",
  },
  ".heroStextStyle": {
    fontFamily: "Montserrat Alternates",
    marginTop: "25px",
    fontWeight: 600,
    lineHeight: "40px",
    fontSize: "23px",
    color: "#FFFFFF",
    textAlign: "center",
  },
}));

export default HeroPageStyle;
