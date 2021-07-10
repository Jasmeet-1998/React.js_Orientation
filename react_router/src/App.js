import './App.css';

import {useState} from 'react';

import Header from './components/Header';

import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';

import Home from './Views/Home';
import About from './Views/About';
import Profile from './Views/Profile';
import Post from './Views/Post';
import NotFound from './Views/NotFound';

function App() {
  const [login,setLogin] = useState(false);
  return (
    <BrowserRouter basename="YouAppName">
      <div className="App">
        <Header />
        <button onClick={()=>setLogin(!login)}>
          {login?'Logout':'Login'}
        </button>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/profile'>
            {/*So if login active then only the user can access the profile page otherwise redirected to home page*/}
            {/*============= Redirect Version =========*/}
            {/* { login ? <Profile /> : <Redirect to="/" />}*/}
            <Profile login={login} />
          </Route>
          <Route path='/post/:id' component={Post} />
          {/*This is the default component like a 404 page that appears when no route matches*/}
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
