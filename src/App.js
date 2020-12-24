import React from "react";
import DraggableWrapper from "./Components/DraggableWrapper/DraggableWrapper";
import "./App.css";

function App() {
  return (
    <div className="draggable">
      <DraggableWrapper id="1">
        <div className="component-card" style={{ backgroundColor: "teal" }}>
          <span>Draggable Component 1</span>
        </div>
      </DraggableWrapper>
      <DraggableWrapper id="2">
        <div
          className="component-card black"
          style={{ backgroundColor: "tomato" }}
        >
          <span>Draggable Component 2</span>
        </div>
      </DraggableWrapper>
    </div>
  );
}

export default App;
