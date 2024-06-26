import React, { useEffect, useState } from "react";
import Node from "./Node";
import RenderIfVisible from "react-render-if-visible";
import { shuffle } from "../utils/shuffle";
import PrisonerResults from "./PrisonersResults";
const LinkedList = ({ nodes, isCircular, setOpen, count }) => {
  const [circular, setListCircular] = useState([]);
  const [prisonersResults, setPrisonersResults] = useState([]);
  const [prisonersRandoms, setPrisonersRandoms] = useState([]);

  const [winsResults, setWinsResults] = useState(0);
  const [winsRandoms, setWinsRandoms] = useState(0);
  useEffect(() => {
    setListCircular([]);
    setPrisonersResults([]);
    setPrisonersRandoms([]);
    setWinsRandoms(0);
    setWinsResults(0);
  }, [nodes]);
  const handleWinsRandoms = () => {
    console.log(winsRandoms);
    setWinsRandoms((winsRandoms) => winsRandoms + 1);
  };
  const handleWinsResults = () => {
    console.log(winsResults);
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

  return (
    <>
      <div className="nodes">
        {nodes.map((node, index) => (
          <RenderIfVisible
            key={index}
            defaultHeight={94.55}
            placeholderElementClass="empty"
          >
            <Node key={index} pointer={node.pointer} internal={index} />
          </RenderIfVisible>
        ))}
      </div>
      <button onClick={checkCircular}>Crear Grafos</button>
      <button onClick={simulatePrisoners}>
        Simular Prisioneros con estrategia
      </button>
      <button onClick={simulateRandoms}>
        Simular Prisioneros en modo random
      </button>
      {
        <div>
          Con Estrategia: {winsResults} / {count}
        </div>
      }
      {
        <div>
          Modo Random: {winsRandoms} / {count}
        </div>
      }
      {circular &&
        circular.map((list, index) => (
          <div key={index} className="circular-list">
            <h2>Lista {index + 1}:</h2>
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

      <PrisonerResults
        isCircular={circular}
        nodes={nodes}
        prisonersResults={prisonersResults}
        setOpen={setOpen}
        key={0}
      ></PrisonerResults>
      <PrisonerResults
        isCircular={circular}
        nodes={nodes}
        prisonersResults={prisonersRandoms}
        setOpen={setOpen}
        key={1}
      ></PrisonerResults>
    </>
  );
};

export default LinkedList;
