import React,{useState} from 'react';

import ResourceList from './ResourceList';
import Users from './Users';

//  class App extends React.Component {
//    state = {
//      resourceName: 'posts'
//    }
//
//    render() {
//      return (
//        <React.Fragment>
//          <button onClick={() => this.setState({ resourceName: 'posts' })}>Posts</button>
//          <button onClick={() => this.setState({ resourceName: 'todos' })}>Todos</button>
//          <ResourceList resourceName={this.state.resourceName}/>
//        </React.Fragment>
//      )
//    }
//  }

//conversion of react function component via hooks

const App=()=>{
  const [resourceName, setResourceName] = useState('posts');
  //we are setting use state to array bcz usestate hook returns an array with two elements
  //so we are explicitily mentioning that if say useState is returning arr[1,2] then arr[1]=resourceName and arr[2]=setResourceName
  //here what we are specifically doing is array destructuring Destructuring in JavaScript is a simplified method of extracting multiple properties from an array by taking the structure and deconstructing it down into its own constituent parts through assignments by using a syntax that looks similar to array literals.
  //resourceName ===currentState resourceName
  //setResourceName === function that changes resourceName
  //useState === function(param===initialState)

  return(
    <React.Fragment>
      <Users />
      <button onClick={() => setResourceName('posts')}>Posts</button>
      <button onClick={() => setResourceName('todos')}>Todos</button>
      <ResourceList resourceName={resourceName}/>
    </React.Fragment>

  )
}
export default App;
