import React,{ useState } from 'react';//importing useState react hook
import { Link } from 'react-router-dom';//use to link the chat path

import './Join.css';

const Join=()=>{
  const [name, setName]=useState('');
  const [room, setRoom]=useState('');

  return(
    //note the syntax differs from normal html as in react it returns JSX i.e javascript xml not html
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div><input placeholder="Name" className="joinInput" type="text" onChange={(event)=> setName(event.target.value) } /></div>
        <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event)=> setRoom(event.target.value) } /></div>
        <Link onClick={event=> (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className="button mt-20" type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  )
}
//onclick event in Link tag so that to avoid the breaking of our application of the user dont provide name or room.
export default Join;
