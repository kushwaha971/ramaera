import { styled } from "@mui/material";
import { Box } from "@mui/system";

const HotelStyle = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(to  right,#1E1E1E,#4b4b4b )`,
  ".hotelContainer": {
    display: "flex",
    width: "60%",
  },
  ".HotelHeading": {
    fontFamily: "Montserrat Alternates",
    fontWeight: "700",
    fontSize: "50px",
    background: "linear-gradient(90deg, #FFE259 0%, #FFA751 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "background-clip": "text",
    "text-fill-color": "transparent",
    "text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  ".Hoteltextyle": {
    width: '67%',
    fontFamily: "Montserrat Alternates",
    marginTop: "25px",
    fontWeight: 600,
    lineHeight: "35px",
    fontSize: "20px",
    color: "#FFFFFF",
  },
//   hotelBtnStyle: {
//     fontFamily: "Montserrat Alternates",
//     marginTop: "20px",
//     padding: "16px 48px",
//     fontWeight: 500,
//     lineHeight: "20px",
//     fontSize: "13px",
//     color: "#FFFFFF",
//     textAlign: "center",
//     borderRadius: "24px",
//     border: "2px solid #FFE259",
//   },
}));

export default HotelStyle;
