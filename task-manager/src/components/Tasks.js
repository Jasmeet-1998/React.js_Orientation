import Task from './Task';//importing single task
//import {useState} from 'react';// we use useState to change the state of the tasks as the task will be  dynamically added and deleted.

//====== looping through the hard coded array and displaying it as tasks==========
// ============ Without Using the useState Hooks of React =======================
// const tasks=[
//   {
//     id:1,
//     text:'Study Blockchain',
//     day:'Feb 5th at 11:30 am',
//     reminder:true
//   },
//   {
//     id:2,
//     text:'Study Microservices',
//     day:'Feb 20th at 8:30 am',
//     reminder:false
//   },
//   {
//     id:3,
//     text:'Study Web Devlopment',
//     day:'Jan 7th at 4:30 pm',
//     reminder:true
//   }
// ]

// const Tasks=()=> {
//
//
//   return (
//     <div>
//      {
//        tasks.map(
//          (task)=>
//          {
//            return <h3 key={task.id}>{task.text}</h3>
//          }
//
//      )}
//     </div>
//   )
// }


const Tasks=({tasks, onDelete,onToggle})=> {
  // using useState with default value with array as three task initially
  // const [tasks,setTasks]=useState([
  //    {
  //      id:1,
  //      text:'Study Blockchain',
  //      day:'Feb 5th at 11:30 am',
  //      reminder:true
  //    },
  //    {
  //      id:2,
  //      day:'Feb 20th at 8:30 am',
  //      reminder:false
  //    },
  //    {
  //      id:3,
  //      text:'Study Web Development',
  //      day:'Jan 7th at 4:30 pm',
  //      reminder:true
  //    }
  //  ])


  return (
    //tasks.push()// This is Wrong as state is immutable you basically have to recreate and send it as new state by setTasks.

    <>
     {
       tasks.map(
         (task)=>
         {
           return <Task key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}/>
         }

     )}
    </>
  )
}


export default Tasks;
