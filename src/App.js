import React, { useState } from "react";
import ShowcaseLayout from "./ShowcaseLayout";
import "./App.css";
import "./custom.css";

function App() {
  const [layout, setLayout] = useState([]);

  return (
    <div>
      <ShowcaseLayout onLayoutChange={setLayout} />
    </div>
  );
}

export default App;
