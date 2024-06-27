import React, { useEffect, useState } from "react";
import LinkedList from "../components/LinkedList";
import { Container, Paper } from "@mui/material";
import { shuffle } from "../utils/shuffle";
import { Button } from "@mui/material";
import { RestartAltRounded } from "@mui/icons-material";
import {Box} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Home = () => {
  const [circular, setListCircular] = useState([]);
  const [nodes, setNodes] = useState([]);
  const count = 100; // Entre 1 y 10 nodos
  const reset = () => {
    console.log(true);
    setNodes(generateNodes);
  };
  // Generar una lista de nodos con números aleatorios
  const generateNodes = () => {
    let nodes = [];
    let nums = [...Array(count).keys()];
    shuffle(nums);
    for (let i = 0; i < count; i++) {
      nodes.push({ pointer: nums[i], internal: i });
    }
    return nodes;
  };

  useEffect(() => {
    console.log("Reset");
    reset();
  }, []);

  const theme = useTheme();

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
            padding: 10,
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
            <h1>Problema de los 100 Prisioneros</h1>
            {circular && (
              <Button 
                color="alternative"
                variant="contained"
                onClick={reset}
                endIcon={<RestartAltRounded />}
                style={{margin:"10px 0"}}
              >
                Nueva Ronda
              </Button>
            )}
            <LinkedList
              nodes={nodes}
              isCircular={true}
              setOpen={true}
              setListCircularProp={setListCircular}
              count={count}
            ></LinkedList>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Home;
