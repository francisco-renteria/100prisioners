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
              ¿Qué es el problema de los 100 prisioneros?
            </Typography>
            <br />
            <Typography variant="h4" align="center">
              📦📦📦💯⛓️⛓️⛓️
            </Typography>

            <Box mt={4} maxWidth={600} padding={"1rem"} textAlign="center">
              <Typography variant="body1">
                El problema de los 100 prisioneros es un famoso acertijo que
                pone a prueba la capacidad de colaboración y estrategia de un
                grupo de prisioneros. En este problema, 100 prisioneros
                numerados del 1 al 100 deben encontrar su propio número dentro
                de 100 cajas numeradas del 1 al 100. Cada caja contiene un papel
                con un número aleatorio del 1 al 100. Los prisioneros pueden
                abrir hasta 50 cajas, uno a la vez, y deben encontrar su propio
                número para sobrevivir.
              </Typography>
              <br></br>
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                style={{ fontWeight: 700 }}
              >
                ¿Cual es la solución?
              </Typography>
              <Typography variant="body1">
                Sorprendentemente, existe una estrategia que permite a los
                prisioneros tener una buena probabilidad de éxito. La solución
                se basa en la teoría de ciclos de permutaciones: cada prisionero
                comienza abriendo la caja con su propio número y sigue abriendo
                la caja cuyo número se encuentra en la anterior, repitiendo este
                proceso hasta encontrar su propio número o abrir 50 cajas.
              </Typography>
              <br></br>
              <Typography variant="body1">
                La probabilidad de éxito de esta estrategia es aproximadamente
                del <strong>31%.</strong> Esto se debe a que el éxito depende de que no haya
                ciclos de longitud mayor a 50 en la permutación de los números
                en las cajas.
              </Typography>
              <br></br>
              <Typography variant="body1">
                Ésta aplicación permite visualizar este problema y su solución
                de manera interactiva. Puedes ver los grafos generados por las
                cajas y el recorrido de cada prisionero al seguir la estrategia
                óptima, así como una simulación de lo que sucede si los
                prisioneros eligen cajas al azar.
              </Typography>
              <br></br>
              <Typography variant="body1">
                Te recomiendo un video del canal Versatium, donde explica de
                manera sencilla la solución.
              </Typography>
              <br></br>
              <div className="video-responsive">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/ksasmB0YPzw?si=4GrWifhPvgP5LZJB"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <Typography variant="body1">
                Espero que disfrutes explorando esta aplicación tanto como yo
                disfruté creándola. Para más detalles o comentarios, no dudes en
                contactarme.
              </Typography>
              <Typography
                m={1}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
              >
                <Button
                  color="primary"
                  variant="contained"
                  startIcon={<GitHub />}
                  href="https://github.com/francisco-renteria"
                >
                  Francisco Rentería
                </Button>
              </Typography>
              <Typography>
                Para más detalles, contáctame por correo electrónico:
              </Typography>
              <Typography
                m={1}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
              >
                <Button
                  color="primary"
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
