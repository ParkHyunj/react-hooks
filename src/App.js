import React, { useEffect, useRef, useState } from "react";
import './App.css';
import useNotification from "./usenotification";

function App() {

  const triggerNotif = useNotification("Can I steal your kimchi?")

  return (
    <div className="App" style={{ height: "1000vh"}}>
      <button onClick={triggerNotif}>
        Hello
      </button>
    

    </div>
  );
}

export default App;
