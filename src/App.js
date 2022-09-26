import React, { useEffect, useRef, useState } from "react";
import './App.css';
import useAxios from "./useaxios";

function App() {

  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json"
  });
  console.log('Loading: ${loading}\nError:${error}\nData:${JSON.stringfy(data) }');

  return (
    <div className="App" style={{ height: "1000vh"}}>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>
        Refetch
      </button>
    </div>
  );
}

export default App;
