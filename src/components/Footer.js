import React from "react";
import { Container, Typography, Link, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        padding: "20px 0",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" gutterBottom>
          JMLCwebdesign © {new Date().getFullYear()}
        </Typography>
        <Box>
          <Link
            href="https://www.linkedin.com/in/jorgemlcosta/"
            target="_blank"
            rel="noopener"
            color="inherit"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              marginRight: "8px",
            }}
          >
            <LinkedInIcon sx={{ marginRight: "4px" }} />
            LinkedIn
          </Link>
          {" | "}
          <Link
            href="https://github.com/JMLCweb"
            target="_blank"
            rel="noopener"
            color="inherit"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              marginLeft: "8px",
            }}
          >
            <GitHubIcon sx={{ marginRight: "4px" }} />
            GitHub
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
