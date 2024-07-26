import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";

const Projects = () => {
  const projectList = [
    {
      name: "Marina Baby Consultant",
      description:
        "E-commerce, baby, motherhood and family advice services, online workshops.",
      link: "https://marinababyconsultant.com/",
    },
    {
      name: "WuahDesign",
      description: "Web gallery, portfolio, graphic design and sports",
      link: "https://wuahdesign.com/",
    },
    {
      name: "Jiva",
      description: "Blog, Photos, Lyfe-style, Makeup, Food",
      link: "https://blogjiva.com/",
    },
    {
      name: "Sinfonia de Água - SPA",
      description: "Support/Updating old Wordpress",
      link: "https://sinfoniadeagua.com/",
    },
    {
      name: "Web Services",
      description: "Web Apps",
      link: "https://jmlcwebdesign.com/",
    },
  ];

  return (
    <Container className="container">
      <Box my={1}>
        <Typography variant="h2" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={3}>
          {projectList.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2">
                    {project.name}
                  </Typography>
                  <Typography variant="body1" component="h6">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href={project.link}
                    target="_blank"
                    rel="noopener"
                  >
                    Ver Projeto
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
