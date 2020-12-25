import React from "react";
import Box from "@material-ui/core/Box";
import Card1 from "./Components/Card1/Card1";
import Card2 from "./Components/Card2/Card2";
import Card3 from "./Components/Card3/Card3";
import "./App.css";

function App() {
  return (
    <>
      <Box display="flex" justifyContent="space-between" padding="1rem">
        <Card1 />
        <Card2 />
        <Card3 />
      </Box>
      {/* Dummy View Height for UX */}
      <div
        className="100vh"
        style={{
          minHeight: "100vh",
          backgroundColor: "teal",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>Body</h3>
      </div>
    </>
  );
}

export default App;
