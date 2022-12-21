import { Box, styled } from "@mui/material";

const FmcgStyle = styled(Box)(({theme}) =>({
    backgroundImage: `linear-gradient(to right,#1E1E1E,#4b4b4b )`,
    ".FmcgContainer":{
        display: 'flex'
    },
    ".fmcgtextContainer":{
        display: 'flex'
    },
    ".FmcgHeading":{
        fontFamily: "Montserrat Alternates",
        fontWeight: "700",
        fontSize: "50px",
      
    },
    ".FmcgtextStyle":{
        width: '67%',
        fontFamily: "Montserrat Alternates",
        marginTop: "15px",
        fontWeight: 600,
        lineHeight: "35px",
        fontSize: "20px",
        color: "#FFFFFF",
    },
    ".FmcgBtnStyle":{
            fontFamily: "Montserrat Alternates",
    marginTop: "20px",
    padding: "16px 48px",
    fontWeight: 500,
    lineHeight: "20px",
    fontSize: "13px",
    color: "#FFFFFF",
    textAlign: "center",
    borderRadius: "24px",
  
    },

}))

export default FmcgStyle;