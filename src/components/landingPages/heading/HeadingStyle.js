import { Box, styled } from "@mui/material";

const HeadingStyle = styled(Box)(({theme}) =>({
    backgroundImage: `linear-gradient(to right,#1E1E1E,#4b4b4b )`,
    ".headingStyleContainer":{
        display: "flex",
    },
    ".textContainer":{
        width: "60%",  
    },
    ".mainHeadingStyle":{
        width: "85%",
        marginTop: "150px",
        background: "linear-gradient(90deg, #FFE259 0%, #FFA751 100%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        "background-clip": "text",
        "text-fill-color": "transparent",
          marginLeft: '50px',
    },
    ".textStyle":{
        fontFamily: "Montserrat Alternates",
        marginTop: "25px",
        fontWeight: 600,
        lineHeight: "40px",
        fontSize: "30px",
        color: "#FFFFFF",
        textAlign: "center",
    },
    
}));

export default HeadingStyle