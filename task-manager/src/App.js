import {useState} from 'react';// Global State so that Task component can be accessed
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


const App=()=> {
  const [showAddTask,setShowAddTask]=useState(false);// for the form to disappear initially and appear only when we click New
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

// Important we pass the actions upwards from child(Task) to parent(App.js)
// Delete Task we pass this function as prop to the Tasks Component that will then be passed to the Task as prop so actions are passed up states passed down.
  const deleteTask=(id)=>{
    //console.log('deleted:',id);
    // so we are basically showing the tasks that do not match with the id for whom the cross/delete button was pressed.
    setTasks(tasks.filter((task)=>
      task.id!==id
    ));
  }
  // Toggle reminder a/c to boolean value true or false we pass this function to the tasks component which then pass it to task as prop.
  // You can use the dev tool react click the >> and open components the App and then expand onestate/task then double click on any task the reminder value changes.
  const toggleReminder=(id)=>{
    setTasks(tasks.map(
      (task)=>task.id===id?{...task,reminder:!task.reminder}:task)// basically map creates new array and applies function to each element on that array if the task id matches with the id of the task that we double click on then we spread the task and then change the reminder to opposite of reminder value that is already set i.e if true then false and if false then true
    )
    //console.log('toggled the task',id);
  }


  // Add task
  const addTask=(task)=>{
    //console.log(task);
    // generate a random id
    const id=Math.floor(Math.random()*10000)+1;
    const newTask={id,...task};
    setTasks([...tasks,newTask])// the old task and newTask added to the Tasks component
  }


  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {/*&& when u dont need else means to Show the new task form only if we click on the button new*/}
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />:'No Tasks Everything Done'}
    </div>
  );
}

export default App;
