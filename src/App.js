import React, { useEffect, useRef, useState } from "react";
import './App.css';

const useNetwork = onChange => {
  const [ status, setStatus ] = useState(navigator.online);
  const handleChange = () => {
    if(typeof onChange === "fuction") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.online);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  // [] => deps는 비워둔다. 오류가 안나도록. eventListener을 추가하기 싫어서
  return status;
}

function App() {

  const handleNetworkChange = (online) => {
    console.log(online?"We just went online": "We are offline");
  };
  const onLine = useNetwork();

  return (
    <div className="App">
      <h1>{onLine ? "Online" : "Offline"}</h1>

    </div>
  );
}

export default App;
