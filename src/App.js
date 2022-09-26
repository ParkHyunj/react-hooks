import React, { useState } from "react";
import './App.css';

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setcurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
  return;
  }
  // 배열이 아닐 때, return하는 것이다.
  return {  
    currentItem : allTabs[currentIndex],
    changeItem : setcurrentIndex
  };
  };

function App() {

  const { currentItem, changeItem } = useTabs(1, content);
  return (
    <div className="App">
      {content.map((section, index) => ( 
        <button onClick={() => changeItem(index)}>
            {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div> 
    </div>
  );
}

export default App;
