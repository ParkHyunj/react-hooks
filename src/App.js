import React, { useEffect, useRef, useState } from "react";
import useScroll from "./usescroll";
import './App.css';

function App() {

  const { y } = useScroll();

  return (
    <div className="App" style={{ height: "1000vh"}}>
      <h1 style={{position: "fixed", color: y > 100 ? "red" : "blue"}}>
        Hi
      </h1>

    </div>
  );
}

export default App;
