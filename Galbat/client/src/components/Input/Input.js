import React from 'react';



import './Input.css';

//handler onChange and onKeyPress to handle the events sod input and sending the message.
const Input=({message,setMessage,sendMessage})=>(
  <form className="form">
    <input
    className="input"
    type="text"
    placeholder="Type a message...."
    value={message}
    onChange={(event)=>setMessage(event.target.value)}
    onKeyPress={(event)=>event.key==='Enter'?sendMessage(event):null}

    />
    <button className="sendButton" onClick={(event)=>sendMessage(event)}>Send</button>
  </form>


);

export default Input;
