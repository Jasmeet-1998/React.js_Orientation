import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
//import the components that will be rendered.
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

//so the '/' route is the default route hit by the user and the Join component will be rendered.
//then this chat component will be rendering the data once the user is sending data (messages) to and fro.

const App=()=>(
  <Router>
    <Route path="/" exact component={Join}/>
    <Route path="/chat" component={Chat}/>
  </Router>

);
export default App;
