import React, { useState } from "react";
import './App.css';

const useInput = (initialValue, validator) => {
  const [ value, setValue ] = useState(initialValue);
  const onChange = event => {
    const{
      target: { value }
    } = event;
    let willUpdate = true;
    if(typeof validator ==="fnction"){
      willUpdate = validator(value);
    }
    // validator의 타입이 함수면 willUpdate에 validator의 결과를 업로드한다.
    if(willUpdate){
      setValue(value);
    }
  };
  return { value, onChange };
};

function App() {

  const maxLen = (value) => value.length <= 10;
  // 여기서, validator -> value -> maxLen이다.
  const name = useInput("Mr.", maxLen);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
    </div>
  );
}

export default App;
