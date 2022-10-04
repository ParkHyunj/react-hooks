import React from 'react';
import Notification from './pages/Notification';
import PreventLeave from './pages/PreventLeave';
import Axios from './pages/Axios';

function App(){
  return (
    <div>
      <h1>react-hooks 실습예제입니다.</h1>
      <p>1. useNotification <Notification /></p>
      <p>2. usePreventLeave <PreventLeave /></p>
      <p>3. useAxios <Axios /></p>        
    </div>
  );
}

export default App;