import React from "react";
import { Container, Typography, Box, Paper, Button } from "@mui/material";
import { GitHub, Send } from "@mui/icons-material";

const About = () => {
  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "7rem",
          maxWidth: "80% !important",
        }}
      >
        <Paper
          elevation={7}
          style={{
            padding: 0,
            margin: "32px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            mt={4}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              style={{ fontWeight: 700 }}
            >
              ¿Qué es TMDB2EMOJIS?
            </Typography>
            <br />
            <Typography variant="h4" align="center">
              🎬👾🍿
            </Typography>

            <Box mt={4} maxWidth={600} padding={"1rem"} textAlign="center">
              <Typography variant="body1">
                TMDB2EMOJIS es una forma innovadora de explorar películas
                utilizando emojis. Este proyecto fue diseñado para proporcionar
                una experiencia visual única al representar visualmente las
                sinopsis de películas mediante emojis.
              </Typography>
              <Typography variant="body1">
                Utilizando algoritmos avanzados de Procesamiento de lenguaje
                natural (Natural Language Processing, NLP por sus siglas en
                inglés), TMDB2EMOJIS analiza las sinopsis de películas y
                selecciona emojis relevantes que capturan la esencia de cada
                película. Este proyecto fue desarrollado en el año 2024 por:
              </Typography>
              <Typography
                m={1}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
              >
                <Button
                  color="alternative"
                  variant="contained"
                  startIcon={<GitHub />}
                  href="https://github.com/francisco-renteria"
                >
                  Francisco Rentería
                </Button>
              </Typography>
              <Typography>
                Para más detalles, contáctame por correo electrónico:{" "}
              </Typography>
              <Typography
                m={1}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
              >
                <Button
                  color="alternative"
                  variant="contained"
                  endIcon={<Send />}
                  href={"mailto:luisfrancisco.renteria@gmail.com"}
                >
                  luisfrancisco.renteria@gmail.com
                </Button>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default About;
