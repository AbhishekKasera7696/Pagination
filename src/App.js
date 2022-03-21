import React from 'react';
import {Counter} from "./Components/Counter";
import './App.css';
import {Todo} from "./Components/Todo";

const App = () => {
  return(
    <div className="App">
     {/* <Counter /> */}
     <Todo/>
    </div>
  );
};

export default App;