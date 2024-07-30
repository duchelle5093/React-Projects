import React from 'react'
import './Navabr.css'

const Navbar = () => {

  return (
    <div>
        <div className="navbar">
            
            <div className="logo">
                <h1>DOIT</h1>
                <p>let's do it together</p>
            </div>

            <div className="middle-menu">
                <div className="all">
                    <button>
                        <i className="fa-solid fa-house"></i>
                        <p>Main</p>
                    </button>
                   
                </div>
                <div className="all">
                    <button>
                        <i className="fa-solid fa-list-check"></i>
                        <p>Tasks</p>
                    </button>
                    
                </div>
                <div className="all">
                    <button>
                        <i className="fa-solid fa-note-sticky"></i>
                        <p>Notes</p>
                    </button>
                    
                </div>
                <div className="all">
                    <button>
                        <i className="fa-solid fa-chart-simple"></i>
                        <p>Statistics</p>
                    </button>
                    
                </div>
                <div className="all">
                    <button>
                        <i className="fa-solid fa-calendar-days"></i>
                        <p>Calendar</p>
                    </button>
                  
                </div>
                <div className="all">
                    <button>
                        <i className="fa-solid fa-gear"></i>
                        <p>Settings</p>
                    </button>
                    
                </div>
            </div>

            <div className="bottom-menu">
                <div className="all">
                    <button>
                        <i className="fa-solid fa-circle-info"></i>
                        <p>Help</p>
                    </button>
                    
                </div>
                <div className="all">
                    <button>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    <p>Log Out</p>
                    </button>
                    
                </div>
            </div>
        </div>
        
            
          
            
           

    </div>
  )

}

export default Navbar


/*
  <i className="fa-solid fa-user"></i>
 <i className="fa-solid fa-folder"></i>
            
*/ 