import { Grid, Typography } from "@mui/material";
import React from "react";

//icons
import CopyrightIcon from "@mui/icons-material/Copyright";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

//custom css
import "../assest/css/footer.css";

function Footer() {
  const Map = () => {
    return (
      <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58756.987128414774!2d-43.385296!3d-23.012325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb695cd967b7%3A0x171cdd035a6a9d84!2sAv.%20L%C3%BAcio%20Costa%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%20Brazil!5e0!3m2!1sen!2sus!4v1671600757200!5m2!1sen!2sus"
        width="100%"
        height="100%"
        // style={border:0}
        // allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
       
      ></iframe>
{/*       
      <Grid item >
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58756.987128414774!2d-43.385296!3d-23.012325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb695cd967b7%3A0x171cdd035a6a9d84!2sAv.%20L%C3%BAcio%20Costa%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%20Brazil!5e0!3m2!1sen!2sin!4v1671604389307!5m2!1sen!2sin" 
      width="400" 
      height="300"
     loading="lazy"
     
      // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      </Grid> */}
      </>
    );
  };

  return (
    <>
      <Grid container sx={{ height: "400px" }}>
        <Map />
      </Grid>
      <Grid
        container
        sx={{
          backgroundColor: "black",
          p: "92px 0 80px",
          justifyContent: "space-evenly",
          color: "#ffff",
        }}
      >
        <Grid item md={9} xs={12}>
          <Typography
            variant="body1"
            fontSize="30px"
            mb="8px"
            fontWeight="600 !important"
            className="footerText"
          >
            <LocationOnIcon />
            State of Rio de Janerio,Brazil
          </Typography>
        </Grid>
        <Grid item md={4} xs={12} className="footerSubtext">
          <Typography variant="body1" className="footerEmail">
            info@Bitwit.com
          </Typography>
          <Typography variant="body1" className="FooterCopyRight">
            copyright <CopyrightIcon /> Noman Force 2022
          </Typography>
          <Typography variant="body1" className="FooterCopyRight">
            Design: Bitwit
          </Typography>
        </Grid>

        {/* footer side section */}
        <Grid item md={3} className="footerSideContent">
          <FacebookRoundedIcon className="footerIcon" />
          <TwitterIcon className="footerIcon" />
          <WhatsAppIcon className="footerIcon" />
          <InstagramIcon className="footerIcon" />
          <YouTubeIcon className="footerIcon" />
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
