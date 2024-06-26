import React, { useState } from "react";
// import { motion } from "framer-motion";
import "./Node.css";

const Node = React.memo(
  ({ internal, pointer, isCircular, setOpen, isSuccess, isFailure }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBox = () => {
      setIsOpen((isOpen) => !isOpen);
    };
    // console.log("Renderizando Componente");

    return (
      <div className="node-container">
        <div className="cube" onClick={() => toggleBox()} draggable={"false"}>
          <div className={"cube_container "}>
            <div className="side front">{internal + 1}</div>
            {/* <div className="side back"></div>
            <div className="side left"></div>
            <div className="side right"></div>
            <div className="side bottom"></div> */}
            {/* <motion.div
            className="side top"
            animate={{ rotateX: isOpen ? 0 : -90 }}
            transition={{ duration: 1 }}
            style={{ transformOrigin: 'bottom' }}
          >
            Top
          </motion.div> */}
            <div>
              {/** Antes aqui era motion.div**/}
              {(isOpen || setOpen) && (
                <div
                  draggable={"false"}
                  className={`box-paper ${
                    isOpen || setOpen ? "open" : "exit"
                  } ${isSuccess ? "success" : ""} ${
                    isFailure ? "failure" : ""
                  }`}
                  // initial={{ opacity: 0, translateY: -10 }}
                  // animate={{ opacity: 1, translateY: -20 }}
                  // exit={{ opacity: 0, translateY: -10 }}
                  // transition={{ duration: 1 }}
                >
                  {pointer + 1}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="label"></div>
        {isCircular && <div className="arrow">&#8594;</div>}
      </div>
    );
  }
);

export default Node;
