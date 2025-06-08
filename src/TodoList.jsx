import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
 let [task,setTask]=useState( [{todo:"sample task",id: uuidv4(),isDone:false }] )
 let [newTask,setNewTask]=useState("");
 //console.log(task.todo);

 let addToList =()=>{
    setTask((prevTask)=>{
         return [...prevTask, {todo:newTask ,id:uuidv4(),isDone:false} ]
     });
    setNewTask("");
    
 }
 let addTask=(event)=>{
    setNewTask(event.target.value)
 }
 let deleteTask=(id)=>{
     setTask((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
    
 }

 let Done=(id)=>{
   setTask( task.map((task)=>{
    if(task.id === id){
        return{
            ...task,
            isDone:true
             
    
        }
    }else{
        return task;
    }
    })
) 
 }

 let allDone=()=>{
     setTask((task)=> 
        task.map((task)=>{
        return{
            ...task,
            isDone:true
     };
    })
    
);
    
 };

    return (
        <>
        
  <div className="container">
    <h2>Todo List Application</h2>

    <input
      placeholder="Add your tasks"
      value={newTask}
      onChange={addTask}
    />
    <button onClick={addToList}>Add</button>

    <hr />

    <h4>List of Tasks To Do</h4>

    <ul>
      {task.map((task) => (
        <li key={task.id}>
          <span className={`task-text ${task.isDone ? "task-done" : ""}`}>
            {task.todo}
          </span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <button onClick={() => Done(task.id)}>
            {task.isDone ? "Undo" : "Task Done"}
          </button>
        </li>
      ))}
    </ul>

    <button onClick={allDone}>All Tasks Done</button>
  </div>


        </>
    )
}