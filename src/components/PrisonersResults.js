import React, { useState } from "react";
import RenderIfVisible from "react-render-if-visible";
import Node from "./Node";

import { Button } from "@mui/material";

const PrisonerResults = ({ prisonersResults, nodes, isCircular, setOpen }) => {
  const [intermediateNodesState, setIntermediateNodesState] = useState(
    prisonersResults.map(() => false)
  );

  const toggleIntermediateNodes = (index) => {
    setIntermediateNodesState((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div>
      {prisonersResults.map((result, index) => (
        <div key={index} className="prisoner-result">
          <h2>
            Prisionero {result.prisoner + 1}:
            {result.openedBoxes.length > 2 && (
              <Button
                color="alternative"
                variant="contained"
                style={{padding:0}}
                onClick={() => toggleIntermediateNodes(index)}
              >
                {intermediateNodesState[index]
                  ? "Ocultar nodos"
                  : "Mostrar nodos"}
              </Button>
            )}
          </h2>
          <div className="nodes-container">
            {result.openedBoxes.map((box, idx) => {
              if (
                idx === 0 ||
                idx === result.openedBoxes.length - 1 ||
                intermediateNodesState[index]
              ) {
                return (
                  <RenderIfVisible
                    key={idx}
                    defaultHeight={94.55}
                    placeholderElementClass="empty"
                  >
                    <Node
                      pointer={nodes[box].pointer}
                      internal={box}
                      isCircular={isCircular}
                      setOpen={setOpen}
                      isSuccess={
                        result.found && nodes[box].pointer === result.prisoner
                      }
                      isFailure={
                        !result.found && result.openedBoxes.includes(box)
                      }
                    />
                  </RenderIfVisible>
                );
              }
              if (idx === 1 && !intermediateNodesState[index]) {
                return (
                  <div key={idx} className="node-container">
                    ...
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrisonerResults;
