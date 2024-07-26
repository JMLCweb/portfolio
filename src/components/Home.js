// src/components/About.js
import React from "react";
import { Container, Typography, Box } from "@mui/material";

const About = () => {
  return (
    <Container className="container">
      <Box my={4}>
        <Typography variant="h2" gutterBottom>
          JMLCweb
        </Typography>
        <Typography variant="h5">
          <h2>Updating our site for You!</h2>
          <p className="text-animation">On Maintenance...</p>
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
