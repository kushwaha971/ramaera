import React from 'react'
import FooterStyle from './FooterStyle';
import polygon from "../../images/Polygon 3(1).svg";
import { Box } from '@mui/material';

function Footer() {
  return (
    <FooterStyle>

        <Box className='PolygonStyle'>
        <Box></Box>
            <img src={polygon} alt="ploygon" />
        </Box>
    </FooterStyle>
  )
}

export default Footer