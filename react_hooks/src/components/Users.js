//this is custom hook template that is using another custom hook useResource for rendering users route
import React,{useState,useEffect} from 'react';
import useResources from './useResources';
const Users=()=>{
  const users=useResources('users');//using custom hooks
  return(
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default Users;
