import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

//images
import News1 from "../assest/images/News/DentalNews.jpg";
import EvnetPic from "../assest/images/News/event.jpeg";
import News2 from "../assest/images/News/News3.jpeg" 

//custom css
import "../assest/css/News.css";

function News() {
  return (
    <>
      <Container  sx={{pt:20}}>
        <Grid
        id="news"
          container
          sx={{
            // height:"450px",
            mt: 15,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              width: "100%",
              fontSize: "42px",
              fontWeight: "800",
            }}
          >
            News & Event
          </Typography>

          <Grid item md={6} sx={{p: 1 }}>
            <Typography
              variant="body1"
              bgcolor="#FFC107"
              display="inline"
              p={1}
              position="relative"
              top="29px"
            >
              News
            </Typography>
            <Box component="img" src={News1} width="100%"></Box>
            <Typography
              variant="body1"
              mt={3}
              fontSize={25}
              fontWeight={800}
              color="#717275"
              className="NewsText"
            >
              The rise of the gig economy spells the end for these workers the
              old system
            </Typography>
            <Typography
              variant="body1"
              mt={3}
              fontSize={20}
              fontWeight={600}
              color="#717275"
              className="NewsText"
              ml={2}
            >
              22 hours ago
            </Typography>
          </Grid>
          <Grid item md={6} >
            <Grid container sx={{m:1}}>
              <Grid item sm={6}>
              <Typography
                variant="body1"
                bgcolor="#0D6EFD"
                display="inline"
                color="#ffff"
                fontWeight="400"
                p={1}
                position="relative"
                top="29px"
              >
                Events
              </Typography>
              <Box component="img" src={EvnetPic} width="100%" />
              </Grid>
              <Grid item sm={6} sx={{p:2}}>
                <Typography variant="body1" className="newsText2">
                  Job Opportunities: Digital, Marketing
                </Typography>
                <Typography variant="body1" className="newsSubText">
                  Alksha, 6 August 2022
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{m:1}}>
              <Grid item sm={6}>
              <Typography
                variant="body1"
                bgcolor="#198754"
                display="inline"
                color="#ffff"
                fontWeight="400"
                p={1}
                position="relative"
                top="29px"
              >
                News
              </Typography>
              <Box component="img" src={News2} width="100%" />
              </Grid>
              <Grid item sm={6} sx={{p:2}}>
                <Typography variant="body1" className="newsText2">
                  What happend to new viral video?
                </Typography>
                <Typography variant="body1" className="newsSubText">
                  6 Day ago
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default News;
