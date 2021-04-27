import {useState} from 'react';

const AddTask=({onAdd})=> {
  const [text,setText]=useState('');
  const [day,setDay]=useState('');
  const [reminder,setReminder]=useState(false);
  const onSubmit=(e)=>{
    // to prevent automatic form submission.
    e.preventDefault();

    if(!text){
      alert('Please add a new task');
      return
    }
    // calling the onAdd function to add the new task
    onAdd({text,day,reminder})

    // making changes to state of the new task.
    setText('')
    setDay('')
    setReminder(false)
  }
  return (
    <form className='add-form' onSubmit={onSubmit}>
       <div className='form-control'>
         <label>Task</label>
         <input type='text'
         placeholder='Add Task'
         value={text} onChange={(e)=>setText(e.target.value)}
         />
         {/*here the onChange event is fired as soon as the user types in this text box and we are setting the e.target.value prop of this event*/}

       </div>
       <div className='form-control'>
         <label>Day & Time</label>
         <input type='text' placeholder='Add Data & Time'
         value={day} onChange={(e)=>setDay(e.target.value)}
          />

       </div>
       <div className='form-control form-control-check'>
         <label>Set Reminder</label>
         <input
         type='checkbox'
         checked={reminder}
         value={reminder}
         onChange={(e)=>setReminder(e.currentTarget.checked)}/*e.currentTarget.checked this will give either true or false*/
         />

       </div>
       <input className='btn btn-block' type='submit' value='Save Task' />
    </form>
  );
}

export default AddTask;
