import React from 'react';//automatic stuff of virtual-dom and reload stuff inclusion
import logo from './logo.svg';//importing logo
import './App.css';//importing styles

// Two components can be created class based and functional based.
//index.js automatically expecting the App exports

// Basic Functional component skelton

//function App(){
//return(
//
//);
//}
//export default App;

// JSX html embedded in javascript
// here their is no html it is JSX in React.
// note the function component should return exactly 1 JSX element a workaround is to enclose everything in a div.
// we write className in JSX instead of class in html.
// to use variables we use {} we enclose the variable in these {}.

function App(){
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" />
        <p>Learn React The Easy Way!!</p>
      </header>
    </div>

  );
}

export default App;
