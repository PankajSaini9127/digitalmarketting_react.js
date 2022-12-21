import React, { useState } from "react";

//BackgroundVideo & Poster

import Video from "../assest/videos/backgroundVideo.mp4";
import Poster from "../assest/videos/backgroundImage.jpg";

//CustomCSS

import "../assest/css/navbar.css";

//materialUi Components

import {
  Grid,
  IconButton,
  Link,
  Typography,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";

//material UI Icon

import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  // fix Navbar Dynamically

  const [scroll, setScroll] = useState();

  //window scroll value set to scroll
  const navfix = () => {
    setScroll(window.scrollY);
  };

  window.addEventListener("scroll", navfix);

  // fix nav after scrolling 580
  const navbar = () => {
    if (scroll >= 580) {
      return "fixed";
    }
    return "sticky";
  };

  //mobile version nav menuBtn
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Grid
        sx={{ height: "600px", "@media(max-width:990px)": { height: "100%" } }}
      >
        {/* background video start here */}

        <Grid className="navbarBackground">
          <Box
            component="video"
            autoPlay
            muted
            loop
            poster={Poster}
            width="100%"
            height="100%"
          >
            <Box
              component="source"
              src={Video}
              type="video/mp4"
              className="bgVideo"
            />
          </Box>
        </Grid>

        {/* Background Video ends here */}

        {/* hero text */}

        <Grid
          container
          sx={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "230px",
            color: "white",
          }}
          id="home"
          className="heroTextDiv"
        >
          <Grid>
            <Typography
              variant="body1"
              sx={{ fontSize: "55px", fontWeight: 800, textAlign: "center" }}
              className="HeaderText1"
            >
              Noman Force
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "15px", fontWeight: 800, textAlign: "center" }}
              className="HeaderText2"
            >
              create a greate video for your website
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Navbar start from here */}

      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position={navbar()}
          className="Navbar"
          sx={{
            backgroundColor: "#FFF",
          }}
        >
          <Toolbar>
            <Grid
              container
              sx={{ margin: "auto", justifyContent: "space-evenly" }}
            >
              <Grid item md={2} xs={10}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "#FFC107",
                    fontWeight: "700",
                    fontSize: "26px",
                  }}
                >
                  Noman Force
                </Typography>
              </Grid>
              <Grid item md={10} display={{ xs: "none", md: "block" }}>
                <Grid container sx={{ justifyContent: "space-evenly" }}>
                  <Link href="#home" className="navItem" underline="hover">
                    Home
                  </Link>
                  <Link href="#studio" className="navItem" underline="hover">
                    Our Studio
                  </Link>
                  <Link href="#portfolio" className="navItem" underline="hover">
                    Portfolio
                  </Link>
                  <Link href="#news" className="navItem" underline="hover">
                    News & Events
                  </Link>
                  <Link href="#contact" className="navItem" underline="hover">
                    Contact Us
                  </Link>
                </Grid>
              </Grid>

              {/* mobile responsive menuIcon */}

              <Grid item xs={2} display={{ xs: "block", md: "none" }}>
                <IconButton
                  size="large"
                  edge="start"
                  color="#FFC107"
                  aria-label="menu"
                  sx={{ ml: "auto" }}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <MenuIcon/>
                </IconButton>
              </Grid>

              {/* mobile version nav expand */}
              
              <Grid
                item
                xs={12}
                display={isOpen ? { xs: "block", md: "none" } : { xs: "none" }}
              >
                <Typography variant="body1">
                  <Link
                    href="#home"
                    underline="hover"
                    className="navItem navItemMobile"
                  >
                    Home
                  </Link>
                </Typography>
                <Typography variant="body1">
                  <Link
                    href="#home"
                    underline="hover"
                    className="navItem navItemMobile"
                  >
                    Our Studio
                  </Link>
                </Typography>
                <Typography variant="body1">
                  <Link
                    href="#home"
                    underline="hover"
                    className="navItem navItemMobile"
                  >
                    Portfolio
                  </Link>
                </Typography>
                <Typography variant="body1">
                  <Link
                    href="#home"
                    underline="hover"
                    className="navItem navItemMobile"
                  >
                    News & Event
                  </Link>
                </Typography>
                <Typography variant="body1">
                  <Link
                    href="#home"
                    underline="hover"
                    className="navItem navItemMobile"
                  >
                    Contact us
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
