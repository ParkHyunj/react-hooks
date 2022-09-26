import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  const sayHello = () => console.log("hello");
  const [ number, setNumber ] = useState(0);
  const [ aNumber, setAnumber ] = useState(0);
  useEffect(sayHello, [number]); 
  // number가 바뀔때만 sayHello 함수 실행

  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number +1)}>
        {number} 
        {/* number를 업데이트 */}
      </button>
      <button onClick={() => setAnumber(aNumber +1)}>
        {aNumber} 
        {/* anumber을 업데이트 */}
      </button>
    </div>
  );
}

export default App;
