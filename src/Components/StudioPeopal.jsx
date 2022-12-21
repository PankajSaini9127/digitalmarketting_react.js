import React from "react";

import { Grid, Typography } from "@mui/material";

function StudioPeopal({ img, name, about, color, display }) {
  return (
    <>
      <Grid
        container
        sx={{
          height: "100%",
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
    
          justifyContent:"flex-end",
          alignItems:"flex-end",
          display:display ||"none",
          '@media(max-width:990px)':{
            height:"400px",marginTop:"50px"
          }
        }}
      >
        <Grid item md={8} xs={12}
          sx={{height:"120px",backgroundColor:color}}
        >
          <Typography component="p"  fontSize="35px !important"  color="white" ml="20px" mt="10px" fontWeight="700 !important">{name}</Typography>
          <Typography component="p"  fontSize="20px !important"  color="#ffff" ml="20px" fontWeight="300 !important">{about}</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default StudioPeopal;
