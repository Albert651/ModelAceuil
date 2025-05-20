//import React from "react";
import Sidebar from "./composent/Sidebar";
import Cotent from "./composent/Cotent";
import Profile from "./composent/Profile"
import './App.css'
const App = () =>{
  return(
    <div className="dashboard" >
      <Sidebar />
      <div className="dashboard--content">
        <Cotent />
        <Profile />
      </div>
    </div>
  )
}

export default App
