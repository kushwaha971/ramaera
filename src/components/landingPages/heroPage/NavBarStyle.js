import { Box, styled } from "@mui/material";

const NavBarStyle = styled(Box)(({ theme }) => ({
  ".AppBarStyle": {
    marginLeft: "230px",
    marginTop: "35px",
    borderRadius: "15px",
    position: "sticky",
    background: "grey",
    opacity: "0.5",
    border: `2px solid #FFFFFF`,
  },
  ".TabStyle": {
    fontFamily: "Montserrat Alternates",
    fontWeight: "500",
    color: "#FFFFFF",
  },
}));

export default NavBarStyle;
