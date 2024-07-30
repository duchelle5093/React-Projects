import React from 'react'
import '../src/App.css'
import Navbar from './Components/Navbar/Navbar'
import Tasks from './Components/Tasks/Tasks'

function App() {

  const DATA = [
    { id: "todo-0", name: "Manger", completed: true },
    { id: "todo-1", name: "Dormir", completed: false },
    { id: "todo-2", name: "Recommencer", completed: false },
  ];
  
  return (
    <>
      <div className="container">
        <Navbar/>
        <Tasks tasks={DATA}/>
      </div>
      
    </>
  )
}

export default App
