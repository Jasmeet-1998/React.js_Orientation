import {useState,useEffect} from 'react';// Global State so that Task component can be accessed

import {BrowserRouter as Router,Route} from 'react-router-dom'
// useEffect hook is used to create side effects often used when we want to happen something when page loads
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
// added via the react-router
import About from './components/About';


const App=()=> {
  const [showAddTask,setShowAddTask]=useState(false);// for the form to disappear initially and appear only when we click New
  const [tasks,setTasks]=useState([]);// For the task component


  // this will run everytime the page reloads in this case fetches the db.json in backend with tasks array.
  useEffect(()=>{
    try{
      const getTasks=async()=>{

        const tasksFromServer=await fetchTasks();// to fetch data from db.json
        setTasks(tasksFromServer);// to set the task state to the fetched data

      }
      getTasks();
    }catch(err){
      console.log(err)
    }
  },[])// [](empty to make it work)or[users] dependancy array where if you want that this useEffect hook runs when the value od the dependancy array changes.

  //fetch all tasks from backend db.json
  const fetchTasks=async()=>{
    const res=await fetch('http://localhost:5000/tasks');
    const data=await res.json();

    //console.log(data)
    return data;
  }

  //fetch Single task from backend db.json
  const fetchTask=async(id)=>{
    const res=await fetch(`http://localhost:5000/tasks/${id}`);
    const data=await res.json();

    //console.log(data)
    return data;
  }



// Important we pass the actions upwards from child(Task) to parent(App.js)
// Delete Task we pass this function as prop to the Tasks Component that will then be passed to the Task as prop so actions are passed up states passed down.
  const deleteTask=async(id)=>{
    //console.log('deleted:',id);
    // so we are basically showing the tasks that do not match with the id for whom the cross/delete button was pressed.

    //deleting task from db.json
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE'
    })

    setTasks(tasks.filter((task)=>
      task.id!==id
    ));
  }

  // Toggle reminder a/c to boolean value true or false we pass this function to the tasks component which then pass it to task as prop.
  // You can use the dev tool react click the >> and open components the App and then expand onestate/task then double click on any task the reminder value changes.
  const toggleReminder=async(id)=>{

    // get the task with id by making request ot backend
    const taskToToggle=await fetchTask(id);
    //  change the reminder to the opposite of current value of the reminder for the task
    const updTask={...taskToToggle,reminder:!taskToToggle.reminder};

    // make a put/update request to add updated reminder of the updTask to backend db.json
    const res=await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(updTask)
    })

    const data=await res.json();// will give us the updated task


    setTasks(tasks.map(
      (task)=>task.id===id?{...task,reminder:!task.reminder}:task)// basically map creates new array and applies function to each element on that array if the task id matches with the id of the task that we double click on then we spread the task and then change the reminder to opposite of reminder value that is already set i.e if true then false and if false then true
    )
    //console.log('toggled the task',id);
  }


  // Add task
  const addTask=async(task)=>{

    // presisting addition of task in front end to the backend i.e db.json
    const res=await fetch('http://localhost:5000/tasks',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(task)// converting the body of our request i.e new task added as json and then added to db.json
    })

    const data=await res.json();// new tasks array with new task in it added in db.json
    setTasks([...tasks,data])// take the existing task and add the new task and then display at the frontend.
    //console.log(task);

    // generate a random id
    // const id=Math.floor(Math.random()*10000)+1;
    // const newTask={id,...task};
    // setTasks([...tasks,newTask])// the old task and newTask added to the Tasks component
  }


  return (
    <Router>
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>


      <Route
       path='/'
       exact
       render={(props)=>(
        
          <>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {/*&& when u dont need else means to Show the new task form only if we click on the button new*/}
            {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />:'No Tasks Everything Done'}
          </>

      )}/>
      {/*exact makes sure that this route dont matches with the / of /about path*/}
      <Route path='/about' component={About}/>
      {/*using Route to make it embed in the about dynamic link route*/}
      <Footer />
    </div>
    </Router>

  );
}

export default App;
