import {useState} from 'react';// Global State so that Task component can be accessed
import Header from './components/Header';
import Tasks from './components/Tasks';


const App=()=> {
  const [tasks,setTasks]=useState([
     {
       id:1,
       text:'Study Blockchain',
       day:'Feb 5th at 11:30 am',
       reminder:true
     },
     {
       id:2,
       text:'Study Microservices',
       day:'Feb 20th at 8:30 am',
       reminder:false
     },
     {
       id:3,
       text:'Study Web Development',
       day:'Jan 7th at 4:30 pm',
       reminder:true
     }
   ]);// For the task component

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
