import { Grid, Typography } from "@mui/material";
import { Box} from "@mui/system";
import React from "react";

import OurStudioPic from "../assest/images/OurStudio.jpg";
import SusaniPic from "../assest/images/Peopal/ShusaniR.jpg"
import Nomay from '../assest/images/Peopal/Nomay.jpg'
import Morgon from '../assest/images/Peopal/Morgon.jpg'
import Roshbison from '../assest/images/Peopal/Roshbison.jpg'
import Jane from '../assest/images/Peopal/Jane.jpg'
import StudioPeopal from "./StudioPeopal";


//customCSS
import '../assest/css/studio.css'


function OurStudio() {
 
  

  

  return (
    <>
      {/* studio content start from here */}
      <Grid container id="studio" sx={{pt:9}}>
        <Grid item md={3} xs={12}>
          <Box
            component="img"
            src={OurStudioPic}
            sx={{ width: "100%", height: "100%" }}
          ></Box>
        </Grid>
        <Grid item md={3} xs={12} sx={{ background: "#212529", p: "24px" }}>
          <Typography
            variant="body1"
            sx={{
              color: "#ffff",
              fontSize: "45px",
              fontWeight: "600",
            }}
          >
            We’re - idealists and strategic thinkers.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#ffff",
              fontSize: "20px",
              mt: 1,
              fontWeight: 400,
            }}
          >
            Over six years in the video business
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ffff",
              fontSize: "18px",
              mt: 1,
              fontWeight: 400,
            }}
          >
            Read News & Events
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ffff",
              fontSize: "18px",
              mt: 1,
              fontWeight: 400,
            }}
          >
            Work with Us
          </Typography>
        </Grid>

        <Grid item md={6} xs={12}>
             <StudioPeopal img={SusaniPic} color="#ffc107" name="Shusani R." about="Founding Director"  />
             <StudioPeopal img={Jane} color="#dc3545" name="Jane M." about="Project Manager" />
             <StudioPeopal img={Morgon} color="#0d6efd" name="Morgon S." about="CEO & Investor" display="flex"/>
             <StudioPeopal img={Nomay} color="#198754" name="Naomi W." about="Art Director" />
             <StudioPeopal img={Roshbison} color="#0dcaf0" name="Robinson H." about="Sales & Marketting" />

        </Grid>
      </Grid>

      
    </>
  );
}

export default OurStudio;
