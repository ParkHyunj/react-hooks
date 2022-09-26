import React, { useEffect, useRef, useState } from "react";
import './App.css';
import useFullscreen from "./usefullscreen";

function App() {

  const { element, triggerFull, exitFull } = useFullscreen();

  return (
    <div className="App" style={{ height: "1000vh"}}>
      <img 
        ref={element}
        src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250"
      />
      <button onClick={exitFull}>
        Exit fullscreen
      </button>
      <button onClick={triggerFull}>
        Make fullscreen
      </button>

    </div>
  );
}

export default App;
