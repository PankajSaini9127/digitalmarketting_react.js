import React from "react";

// material component

import { Grid, Typography } from "@mui/material";


//custom CSS
import "../assest/css/home.css"

function Home() {
  return (
    <>
      <Grid container >
        <Grid item md={6} sx={{p:15}} className="homeContent1">
          <Typography variant="body1" fontSize="35px">Let us create...</Typography>
          <Typography variant="body1" className="heroText2">
            You may contribute a small amount via PayPal if Nomad Force Template
            is useful for you. This will absolutely help us to keep creating
            better CSS templates for you.<br/><br/> We provide you 100% free templates on
            TemplateMo website. Images are provided by FreePik and Unsplash
            websites.
          </Typography>
        </Grid>
        <Grid item md={6} sx={{p:15, my:6}} className="homeContent1">
          <Typography variant="body1" className="heroText2">
            This Bootstrap 5 layout is free to use for your business. You are
            allowed to edit it in any way you like. However, please do not
            redistribute this template ZIP file for a template download purpose
            on any other website such as Free CSS collections.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
