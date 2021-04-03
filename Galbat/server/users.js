//Helper functions to manage users joining in signing out adding users removing users and keeping track of current user.
const users=[];

const addUser=({id,name,room})=>{
  //Javascript Mastery=javascriptmastery

  name=name.trim().toLowerCase();//remove widespaces
  room=room.trim().toLowerCase();

  const existingUser=users.find((user)=>user.room===room && user.name===name);

  //if username already exists
  if(existingUser){
    return {error:"Username is taken"};
  }
  //if username unique
  const user={id,name,room};
  users.push(user);

  return {user}

}
const removeUser=(id)=>{
  const index=users.findIndex((user)=>user.id===id);

  if(index!==-1){
    return users.splice(index,1)[0];//splice will remove the that user from users array.
  }

}

const getUser=(id)=>users.find((user)=>user.id===id);

const getUsersInRoom=(room)=>users.filter((user)=>user.room===room);//returns users from room

module.exports={addUser,removeUser,getUser,getUsersInRoom};
