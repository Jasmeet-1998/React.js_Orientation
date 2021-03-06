import React, {useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';


//importing components
import TextContainer from '../TextContainer/TextContainer';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import Message from '../Message/Message';


let socket;
//useEffect resources->https://reactjs.org/docs/hooks-effect.html



const Chat=({location})=>{
  const [name, setName]=useState('');
  const [room, setRoom]=useState('');
  const [users,setUsers]=useState('');
  //to keep track of all messages we have a state that has array and an empty string.
  const [message,setMessage]=useState('');
  const [messages,setMessages]=useState([]);

  const ENDPOINT='localhost:5000'
//note the useEffect has to be set in a way that it only activates if value in the list changes here list is an array that we pass in our case [ENDPOINT,location.search] i.e wheather the endpoint or the url query params change then only useEffect comes into play and this also ensures that only one socket instance is created rather than two.
  useEffect(()=>{
    const {name,room}=queryString.parse(location.search)//react-router comes with the location this returns a url back
    //the user joining end
    socket=io(ENDPOINT);//pass an endpoint to io socket component in our case our server localhost address.
    setName(name);
    setRoom(room);
    //we can emit events from client side or from the server to the rest of the users also called broadcasting. reference->https://socket.io/docs/v3/emitting-events/
    socket.emit('join',{name,room},()=>{


    });//ES 6 Syntax same as name:name,room:room
    //the user disconnecting end.
    return ()=>{
      socket.emit('disconnect');

      socket.off();
    }
    //console.log(socket);//instance of a socket
    //console.log(name,room);
    //console.log(location.search);//returns the query params of the returned url when the user is redirected from join to chat page.
  },[ENDPOINT,location.search]);

  //to handle the message and send message part from backend index.js server side.
  useEffect(()=>{
    //listening to the socket
    socket.on('message',(message)=>{
      setMessages([...messages,message]);

    });
    socket.on('roomData',({users})=>{
      setUsers(users);

    });
    return()=>{
      socket.off()
    }
  },[messages]);

  const sendMessage=(event)=>{

    //to avoid full refresh page on button press in react
    event.preventDefault();
    if(message){
      socket.emit('sendMessage',message,()=>setMessage(''));
    }
  }
  console.log(message,messages);
  //function for sending messages
  //pass the required params as properties in the Input component like in the inforbar  room and then pass this properties as parameters in the .js file.
  return(
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />

        <Messages messages={messages} name={name} />


        <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>

      </div>
      <TextContainer users={users} />

    </div>

  );
}

export default Chat;
