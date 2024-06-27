import React, { useEffect, useState } from "react";
import Node from "./Node";
import RenderIfVisible from "react-render-if-visible";
import { shuffle } from "../utils/shuffle";
import PrisonerResults from "./PrisonersResults";
import { Button, Typography } from "@mui/material";
import { Timeline } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
const LinkedList = ({ nodes, isCircular, setOpen, count }) => {
  const [circular, setListCircular] = useState([]);
  const [prisonersResults, setPrisonersResults] = useState([]);
  const [prisonersRandoms, setPrisonersRandoms] = useState([]);

  const [winsResults, setWinsResults] = useState(0);
  const [winsRandoms, setWinsRandoms] = useState(0);

  const processCalc = () => {
    checkCircular();
    simulatePrisoners();
    simulateRandoms();
  };
  useEffect(() => {
    setListCircular([]);
    setPrisonersResults([]);
    setPrisonersRandoms([]);
    setWinsRandoms(0);
    setWinsResults(0);
  }, [nodes]);
  const handleWinsRandoms = () => {
    setWinsRandoms((winsRandoms) => winsRandoms + 1);
  };
  const handleWinsResults = () => {
    setWinsResults((winsResults) => winsResults + 1);
  };

  const checkCircular = () => {
    const visited = new Set();
    const circularLists = [];
    nodes.forEach((node) => {
      if (!visited.has(node.internal)) {
        const tempList = [];
        let currentNode = node;

        while (!visited.has(currentNode.internal)) {
          tempList.push(currentNode.internal);
          visited.add(currentNode.internal);
          currentNode = nodes[currentNode.pointer];
        }

        circularLists.push(tempList);
      }
    });

    setListCircular(circularLists);
  };

  const simulatePrisoners = () => {
    const results = [];
    setWinsResults(0);

    for (let prisoner = 0; prisoner < count; prisoner++) {
      let found = false;
      let openedBoxes = [];
      let currentBox = prisoner;
      for (let i = 0; i < count / 2; i++) {
        openedBoxes.push(currentBox);
        if (nodes[currentBox].pointer === prisoner) {
          found = true;
          handleWinsResults();
          break;
        }
        currentBox = nodes[currentBox].pointer;
      }
      results.push({ prisoner, openedBoxes, found });
    }

    setPrisonersResults(results);
  };

  const generateRandoms = () => {
    let nums = [...Array(count).keys()];
    shuffle(nums);
    return nums;
  };

  const simulateRandoms = () => {
    setWinsRandoms(0);
    const results = [];

    for (let prisoner = 0, j = 0; prisoner < count; prisoner++, j++) {
      let found = false;
      let openedBoxes = [];
      let r = generateRandoms();
      let currentBox = r[0];
      for (let i = 0; i < count / 2; i++) {
        openedBoxes.push(currentBox);
        if (nodes[currentBox].pointer === prisoner) {
          found = true;
          handleWinsRandoms();
          break;
        }
        currentBox = r[i + 1];
      }
      results.push({ prisoner, openedBoxes, found });
    }

    setPrisonersRandoms(results);
  };

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Button
        color="alternative"
        variant="contained"
        onClick={processCalc}
        endIcon={<Timeline />}
      >
        Crear Grafos y simulaciones
      </Button>

      <br></br>
      <br></br>
      <Box display={"flex"}>
        {circular.length > 0 && (
          <Typography m={1} variant="h4">
            Con Estrategia: {winsResults} / {count}
          </Typography>
        )}
        {circular.length > 0 && (
          <Typography m={1} variant="h4">
            Modo Random: {winsRandoms} / {count}
          </Typography>
        )}
      </Box>

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              indicatorColor="primary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="lab API tabs example"
              value={0}
            >
              <Tab label="Cajas" value="1" />
              <Tab label="Grafos" value="2" />
              <Tab label="Solución con Estrategia" value="3" />
              <Tab label="Modo Aleatorio" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="nodes">
              {nodes.map((node, index) => (
                <Node key={index} pointer={node.pointer} internal={index} />
              ))}
            </div>
          </TabPanel>
          <TabPanel value="2">
            {circular &&
              circular.map((list, index) => (
                <div key={index} className="circular-list">
                  <h2>Grafo {index + 1}:</h2>
                  <div className="nodes-container">
                    {list.map((node, idx) => (
                      <RenderIfVisible
                        key={idx}
                        defaultHeight={94.55}
                        placeholderElementClass="empty"
                      >
                        <Node
                          key={idx}
                          pointer={nodes[node].pointer}
                          internal={node}
                          isCircular={isCircular}
                          setOpen={setOpen}
                        />
                      </RenderIfVisible>
                    ))}
                  </div>
                </div>
              ))}
          </TabPanel>
          <TabPanel value="3">
            <PrisonerResults
              isCircular={circular}
              nodes={nodes}
              prisonersResults={prisonersResults}
              setOpen={setOpen}
              key={0}
            ></PrisonerResults>
          </TabPanel>
          <TabPanel value="4">
            <PrisonerResults
              isCircular={circular}
              nodes={nodes}
              prisonersResults={prisonersRandoms}
              setOpen={setOpen}
              key={1}
            ></PrisonerResults>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default LinkedList;
