import {FaTimes} from 'react-icons/fa';

const Task=({task,onDelete,onToggle})=> {
  return (
    <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={()=>onToggle(task.id)}>
      <h3>{task.text} <FaTimes style={{color:'red',cursor:'pointer'}}
       onClick={()=>onDelete(task.id)}
       /> </h3> {/* Here onDelete has parameter task.id as the Delete function in App.js takes id as the parameter initially*/}
      <p>{task.day}</p>

    </div>
  );
}

export default Task;
