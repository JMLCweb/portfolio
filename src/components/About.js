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
        <div class="layout">
          <div class="content">
            <h1>
              <strong>JMLC</strong>web <strong>S</strong>olar <strong>S</strong>
              ystem
            </h1>
          </div>

          <ol class="solar-system">
            <li class="orbit">
              <div class="label">Sun</div>
              <div class="planet sun"></div>
            </li>
            <li class="orbit">
              <div class="label">Mercury</div>
              <div class="orbit-ring"></div>
              <div class="axis">
                <div class="planet mercury"></div>
              </div>
            </li>
            <li class="orbit">
              <div class="label">Venus</div>
              <div class="orbit-ring"></div>
              <div class="axis">
                <div class="planet venus"></div>
              </div>
            </li>
            <li class="orbit">
              <div class="label">Earth</div>
              <div class="orbit-ring"></div>
              <div class="axis">
                <div class="planet earth"></div>
              </div>
            </li>
            <li class="orbit">
              <div class="label">Mars</div>
              <div class="orbit-ring"></div>
              <div class="axis">
                <div class="planet mars"></div>
              </div>
            </li>
            <li class="orbit">
              <div class="label">Jupiter</div>
              <div class="orbit-ring"></div>
              <div class="axis">
                <div class="planet jupiter"></div>
              </div>
            </li>
            <li class="orbit">
              <div class="label">Saturn</div>
              <div class="orbit-ring"></div>
              <div class="axis">
                <div class="planet saturn"></div>
              </div>
            </li>
            <li class="orbit">
              <div class="label">Uranus</div>
              <div class="orbit-ring"></div>
              <div class="axis">
                <div class="planet uranus"></div>
              </div>
            </li>
            <li class="orbit">
              <div class="label">Neptune</div>
              <div class="orbit-ring"></div>
              <div class="axis">
                <div class="planet neptune"></div>
              </div>
            </li>
            <li class="orbit">
              <div class="label">Pluto</div>
              <div class="orbit-ring"></div>
              <div class="axis">
                <div class="planet pluto"></div>
              </div>
            </li>
          </ol>
        </div>
      </Box>
    </Container>
  );
};

export default About;
