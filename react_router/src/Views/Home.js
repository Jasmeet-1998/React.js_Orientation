import {useEffect} from 'react';
const Home=()=> {
  useEffect(()=>{
    window.scroll(0,0);
  },[])
  return (
    <>
      <h3>Home Page</h3>
      <p>1.) npm i react-router-dom</p>
      <p>2.) Wrap everything in App inside <b>BrowserRouter</b> tag</p>
      <p>3.) Use <b>Route</b> tag to define different routes for your app.</p>
      <br />
      <b>example -  'Route path="/" component=[] exact' replace [] with curly braces where / refers to home page i.e localhost://3000 </b>
      <b>exact tells that route is strictly defined i.e it prevents the multiple view/route display if they have the same prefix routes like in the case of / for home and /about both will appear when we go to /about if we don not specify the exact property.</b>
      <br />
      <p>4.) <b>Routes to different views => "/ ->Home" "/about ->About" "/profile->Profile"</b></p>
      <p>5.) <b>Use 'Link to' to specify different routes link to avoid refreshing/re-rendering of the page&components refer Header.js</b></p>
      <p>6.) <b>Use 'forceRefresh prop in BrowserRouter' to explicitely refresh when we hit different route</b></p>
      <p>7.) <b>Use 'getUserConfirmation=[(message,callback)=>[callback(window.confirm();)]]' use curly braces and then write a custom message or prompt component inside  to prompt the user when going to different route</b></p>
      <p>8.) <b>Use 'use useEffect and inside of their specify window.scroll(0,0) so that the next component rendered is started from top instead of previous component scroll state' use curly braces and then write a custom message or prompt component inside  to prompt the user when going to different route</b></p>
      <p>9.) <b>Use 'use Route component=[]' without path specified to make a default route if no other route matches like a 404 view refer App.js </b></p>
      <br />
      <hr />
      <h3>Core Topics</h3>
      <h4>1.) Grabbing Params from random url refer Post.js in Views via match prop or useParams & grabbing the ?query like ?name="something" via useLocation hook</h4>
      <p>Route path='/post/:id' component=[Post] </p>
      <br />
      <h4>2.) Login System via Routes i.e Protected Routes useState,Redirect,useHistory</h4>
      <p>Refer App.js,Profile.js</p>
      <br />
      <h4>3.) Create Nested Routes like inside Profile page i want view profile component route and edit profile component route</h4>
      <p>Using useRouteMatch Hook Refer Profile.js</p>
    </>
  );
}

export default Home;
