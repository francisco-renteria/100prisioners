import React, { useEffect, useState } from "react";
import LinkedList from "../components/LinkedList";

import { shuffle } from "../utils/shuffle";

const App = () => {
  const [circular, setListCircular] = useState([]);
  const [nodes, setNodes] = useState([]);
  const count = 1000; // Entre 1 y 10 nodos
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

  return (
    <>
      <div className="App">
        <h1>Problema de los 100 Prisioneros</h1>
        {circular && <button onClick={reset}>Nueva Ronda</button>}
        <LinkedList
          nodes={nodes}
          isCircular={true}
          setOpen={true}
          setListCircularProp={setListCircular}
          count={count}
        >
        </LinkedList>
      </div>
    </>
  );
};

export default App;
