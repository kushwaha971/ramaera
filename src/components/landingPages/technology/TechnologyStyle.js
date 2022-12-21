import { Box, styled } from "@mui/material";

const TechnologyStyle = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(to  right,#1E1E1E,#4b4b4b )`,
  ".techContainer": {
    display: "flex",
    margin: "5px",
    marginTop: "-110px",
  },
  ".textContainer": {
    width: "150%",
    marginTop: "-70px",
    marginRight: "50px",
  },
  ".TechnologyHeading": {
    fontWeight: 600,
    fontFamily: "Montserrat Alternates",
    color: "#FFFFFF",
    fontSize: "45px",
    textAlign: "right",
  },

  ".Technologytextyle": {
    fontFamily: "Montserrat Alternates",
    marginTop: "25px",
    fontWeight: 600,
    lineHeight: "35px",
    fontSize: "25px",
    color: "#FFFFFF",
    textAlign: "center",
  },
  ".TechBtnStyle": {
    fontFamily: "Montserrat Alternates",
    marginTop: "20px",
    marginLeft: "285px",
    padding: "16px 48px",
    fontWeight: 500,
    lineHeight: "20px",
    fontSize: "15px",
    color: "#FFFFFF",
    textAlign: "center",
    borderRadius: "24px",
  
  },
}));

export default TechnologyStyle;
