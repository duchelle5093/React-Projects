import React, { useState } from "react";
import { nanoid } from "nanoid";
import Form from './Form.jsx';
import FilterButton from './FilterButton.jsx';
import Todo from './Todo.jsx';
import Dates from "./Date.jsx";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function Task(props) {

        const [tasks, setTasks] = useState(props.tasks);
        const [filter, setFilter] = useState("All");


        const filterList = FILTER_NAMES.map((name) => (
          <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
          />
        ));
        
        
        function toggleTaskCompleted(id) {
            const updatedTasks = tasks.map((task) => {
            if (id === task.id) {
               return { ...task, completed: !task.completed };
              }
            return task;
            });
            setTasks(updatedTasks);
        }


        function deleteTask(id) {
          const remainingTasks = tasks.filter((task) => id !== task.id);
          setTasks(remainingTasks);
        }

        const taskList = tasks
        .filter(FILTER_MAP[filter])
        .map((task) => (
          <Todo
            id={task.id}
            name={task.name}
            completed={task.completed}
            key={task.id}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ));
      
        
        
        function addTask(name) {
            const newTask = { id: `todo-${nanoid()}`, name, completed: false };
            setTasks([...tasks, newTask]);
        }

        const taskWord =()=>{
          let headingText 
          if(taskList.length === 1){
            headingText = "tâche restante"
          }else if(taskList.length === 0){
            headingText = "Aucune tâche en attente"
          }else{
            headingText = "tâches  restantes"
          }
          return headingText
        }
        const length = taskList.length === 0 ? '' : taskList.length

        
        function editTask(id, newName) {
          const editedTaskList = tasks.map((task) => {
            if (id === task.id) {
              return { ...task, name: newName };
            }
            return task;
            
          });
          setTasks(editedTaskList);
      }
      
        
  return (
    <div>
      <h1>TodoMatic</h1>
      <Dates/>
      <Form addTask={addTask}/>
      <div>
        {filterList}
      </div>
      <h2 id="list-heading">{length} {taskWord()}</h2>
      <ul
        role="list"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}


export default Task;






























































