// src/components/About.js
import React from "react";
import { Container, Typography, Box } from "@mui/material";
import "./about.css";
const About = () => {
  return (
    <Container className="container" maxWidth="sm">
      <Box my={6}>
        <Typography variant="h2" gutterBottom>
          About Me
        </Typography>
        <Typography variant="h5">
          Hello! I'm a Web Developer with a knack for staying "up to date" and a
          strong addiction to technology.
          <p>
            My constant pursuit of new knowledge drives my passion for creating
            innovative web solutions.
          </p>
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
