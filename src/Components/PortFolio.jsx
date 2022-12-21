import React from "react";

import { Box, Container, Grid, styled, Typography } from "@mui/material";

//images
import Portfolio1 from "../assest/images/portfolio/portfolio1.jpeg";
import Portfolio2 from "../assest/images/portfolio/portfolio2.jpeg";
import Portfolio3 from "../assest/images/portfolio/portfolio3.jpeg";
import Portfolio4 from "../assest/images/portfolio/portfolio4.jpeg";

function PortFolio() {
  const PortfolioHeading = styled("span")({
    fontSize: "32px",
    fontWeight: "600 !important",
    marginLeft: "30px",
    marginTop:"10px"
  });

  const PortFolioSubheading = styled("span")({
    fontSize: "20px",
    marginLeft: "30px",
    marginTop:"10px",
    marginBottom:"20px",
  });

  return (
    <>
      <Container sx={{paddingTop:"50px"}} id="portfolio">
        <Grid container sx={{justifyContent:"space-evenly",my:5}}>
          <Grid item xs={6} md={2}>
            <Typography
              variant="body1"
              sx={{ fontSize: "45px", fontWeight: "600 !important" }}
            >
              Portfolio
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item md={6}>
            <Grid container sx={{flexDirection:"column"}}>
              <Box component="img" src={Portfolio1} sx={{height:"100%",width:"100%"}} />
              <PortfolioHeading>Effortless</PortfolioHeading>
              <PortFolioSubheading color="#dc3545">Branding</PortFolioSubheading>
            </Grid>
            <Grid container sx={{flexDirection:"column"}}>
              <Box component="img" src={Portfolio2} sx={{height:"100%",width:"100%"}}/>
              <PortfolioHeading>Health Technology</PortfolioHeading>
              <PortFolioSubheading color="red">Air Direction</PortFolioSubheading>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <Grid container sx={{flexDirection:"column"}}>
              <Box component="img" src={Portfolio3} sx={{height:"100%",width:"100%"}} />
              <PortfolioHeading>Maki </PortfolioHeading>
              <PortFolioSubheading>Website</PortFolioSubheading>
            </Grid>
            <Grid container sx={{flexDirection:"column"}} >
              <Box component="img" src={Portfolio4} sx={{height:"100%",width:"100%"}} />
              <PortfolioHeading>The gig economy</PortfolioHeading>
              <PortFolioSubheading>Graphics</PortFolioSubheading>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default PortFolio;
