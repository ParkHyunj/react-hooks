import React, { useState, useEffect, useRef } from "react";
import './App.css';

const useClick = (onClick) => {
  const ref = useRef();
  
  useEffect(() => {
  // 1. 변수를 안에서 copy하지 않으면 warning (ref가 unmount 시점에 null이 된다.)
  const element = ref.current;
  if (element) {
  // 'click' is keyword
  element.addEventListener('click', onClick);
  }
  // ComponentWillUnmount()
  return () => {
  if (element) {
  element.removeEventListener('click', onClick);
  }
  };
  }, [onClick]);
  
  return ref.current;
  };
  
//  useClick을 사용해서 useRef()를 만들고, 같은 reference를 return 해줬다.


function App() {

  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>      
      {/* 주어진 reference를 title에 줬다. */}
    </div>
  );
}

export default App;
