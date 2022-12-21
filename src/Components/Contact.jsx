import React from "react";

import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Container,
  Box
} from "@mui/material";


//custom css
import "../assest/css/contact.css";

function Contact() {
  const Data = {
    name: "",
    email: "",
    message: "",
    branding: "",
    digitalMarketing:"",
    webDeveploment :""
  };

  const [formData, setFormData] = React.useState(Data);

  const handleContact = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckBox =(e)=>{
     
      let checked = e.target.checked;
      checked?
       setFormData({
        ...formData,
         [e.target.name] : e.target.value
       }): setFormData({...formData})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Container sx={{ mt: "150px", pt: "150px" }} id="contact">
        <Typography
          variant="body1"
          className="contactHeader"
          textAlign="center"
          pb="100px"
        >
          Don't be shy, write to us
        </Typography>

        {/* form start from here */}
        <Grid container sx={{ justifyContent: "space-around" }}>
          <Grid item md={7} xs={12}>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3} sx={{justifyContent:"space-evenly"}}>
                <Grid item md={6} xs={10}>
                  <TextField
                    label="Full Name"
                    placeholder="Full Name"
                    required
                    fullWidth
                    value={formData.name}
                    onChange={handleContact}
                    name="name"
                  />
                </Grid>
                <Grid item md={6} xs={10}>
                  <TextField
                    label="Email"
                    required
                    fullWidth
                    value={formData.email}
                    onChange={handleContact}
                    name="email"
                  />
                </Grid>
                <Grid item md={12} xs={10}>
                  <TextField
                    label="Message"
                    placeholder="Tell us about the project"
                    required
                    fullWidth
                    multiline
                    rows={6}
                    value={formData.message}
                    onChange={handleContact}
                    name="message"
                  />
                </Grid>
                <Grid
                  item
                  md={10}
                  xs={12}
                  sx={{ justifyContent: "space-between", color: "#565758" }}
                >
                  <Typography variant="body1" className="Servicecontact">Services*</Typography>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleCheckBox}
                        value="Branding"
                        name="branding"
                      />
                    }
                    label="Branding"
                    className="labelContact"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleCheckBox}
                        value="Digital Exeriences"
                        name="digitalMarketting"
                      />
                    }
                    label="Digital Exeriences"
                    className="labelContact"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleCheckBox}
                        value="Web Development"
                        name="webDevelopment"
                      />
                    }
                    label="Web Development"
                    className="labelContact"
                  />
                </Grid>
                <Grid
                  container
                  sx={{ justifyContent: "space-around", my: 5 }}
                >
                  <Button
                    variant="contained"
                    className="contactFormbtn"
                    type="submit"
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Contact;
