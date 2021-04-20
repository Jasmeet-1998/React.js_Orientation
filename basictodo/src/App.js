import React from 'react';//automatic stuff of virtual-dom and reload stuff inclusion
import logo from './mylogo.png';//importing logo
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

// ===========Function Based Components
// function App(){
//   return(
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" />
//         <p>Learn React The Easy Way!!</p>
//       </header>
//     </div>
//
//   );
// }

// ==============Class Based Components===========
// Whenever using class make sure u call the method render(){return();}
//constructor will store the initial state of the component. constructor is automatically called as the class instance is created basics OOPS.
//whenenver we want to change the state we use the setState method in react.
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }

  addItem(todoValue){
    if(todoValue!=='empty'){
      const newItem={
        id: Date.now(),
        value:todoValue,
        isDone:false
      };
      const list=[...this.state.list];
      list.push(newItem);

      //after adding changing the list and the newItem state as list and empty for next push or addition of item.
      //here the list:list can be written as list only as ES7 is reduntant and automatically refers to the list variable we are talking about.
      this.setState({
        list:list,
        newItem:""
      });
    }
  }

  deleteItem(id){
    //create a copy of the list.
    const list=[...this.state.list];
    // bascially filtering all the items i.e getting all the items that do not match with the id that we want to delete.
    const updatedlist=list.filter(item=>item.id!==id);
    //update the list with the seState method
    this.setState({list:updatedlist});

  }

  updateInput(input){
    //add the input text to the newItem
    this.setState({newItem:input});
  }

  render(){
    return(
      <div>
        <img className="mylogo" src={logo} width="100" height="100"/>
        <h1 classname="app-title">To do App</h1>
        <div className="container">
          Workspace
          <br/>
          <input
          type="text"
          className="input-text" placeholder="New Task"
          required
          value={this.state.newItem}
          onChange={e=>this.updateInput(e.target.value)}
          />
          <button
          className="add-btn"
          onClick={()=>this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length} >
          Add</button>
          <div className="list">
            <ul>
            {this.state.list.map(item=>{
              return(
                <li key={item.id}>
                  <input type="checkbox"
                  name="idDone"
                  checked={item.isDone}
                  onChange={()=>{}}
                  />
                  {item.value}
                  <button
                  className="btn"
                  onClick={()=>this.deleteItem(item.id)}
                  >Delete</button>
                </li>
              );
            })}
              <li>
                <input type="checkbox" className="" />
                Complete React Basics!
                <button className="btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }


}

export default App;
