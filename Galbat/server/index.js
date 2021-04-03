const express=require('express'),
      app=express(),
      http=require('http'),
      {addUser,removeUser,getUser,getUsersInRoom}=require('./users.js'),
      cors=require('cors'),
      PORT=process.env.PORT || 5000,
      router=require('./router');
// for Understanding Socket.io Source->https://socket.io/
//https://socket.io/docs/v3/server-initialization/index.html#Attached-to-an-existing-HTTP-server

app.use(router);
app.use(cors());

//socket.io config with http with existing server in our case app & handling cors blocking.
//const io=socketio(server);//instance of the socketio whose method we will be using.
const server = http.createServer(app);
const io=require('socket.io')(server,{
  cors:{
    origin:'*',
  }
});




//establishing connection with a new client/user
io.on('connection',(socket)=>{
  //console.log("We have a new Connection");
  //socket refers to the new client joined
  //for disconnecting client
  socket.on('join',({name,room},callback)=>{
    //console.log('name,room');

    const {error,user} =addUser({id:socket.id,name,room});

     if(error){
       return callback(error);
     }
    //callback can be used for error handling.

    //an event to show welcome message when user joins room without any error .emit()
    socket.emit('message',{user:'admin',text:`${user.name},welcome to the room ${user.room}`});
    //.broadcast() to broadcast a message to all other user in the room beside the current user who just joined.
    socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name}, has joined!`});
    //joins a user to the room. .join(roomname to join)
    socket.join(user.room);

    //call the callback function for error detection
    callback();

  });

  //frontend to send the message
  socket.on('sendMessage',(message,callback)=>{
    const user=getUser(socket.id);

    io.to(user.room).emit('message',{user:user.name,text:message});

    callback();
  });

  socket.on('disconnect',()=>{
    console.log('User has Left!!');
  })
});




server.listen(PORT,process.env.IP,()=>{
  console.log(`Galbat Server Started at....${PORT}`);
})
