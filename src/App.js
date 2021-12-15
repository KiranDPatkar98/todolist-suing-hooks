import logo from "./logo.svg";
import "./App.css";
import React, { createContext } from "react";
import { useState,useEffect } from "react";
import Todolist from "./Components/Todolist";
import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom'


function App() {
  const [task, settask] = useState("");
  const [Details, setDetails] = useState([]);
 
  let add = () => {
    setDetails((prevstate) => [
      ...prevstate,
      {
        id: Details.length + 1,
        text: task,
        status: "new",
      },
    ]);
    settask("");
  };

  let done = (id) => {
    console.log(id);
    let updetails = Details.map((item) => {
      if (item.id === +id) {
        item.status = "completed";
      }
      return item;
    });
    setDetails(updetails);
  };
 let deleted = (id) => {
    // console.log(id);
    let updetails = Details.map((item) => {
      if (item.id === +id) {
        item.status = "deleted";
      }
      return item;
    });
    setDetails(updetails);
  };
  


  return (
    <Router>
      <ul>
        <li><Link to="/">TODOLIST</Link></li>
        <li><Link to="/completedlist">COMPLETED-LIST</Link></li>
        <li><Link to="/deletedlist">DELETED-LIST</Link></li>
      </ul>
    <div className="main">
    <input
        value={task}
        onChange={(e) => settask(e.target.value)}
        
        type="text"
        placeholder="What to do ?"
      />
      <button onClick={add}>ADD</button>
      <Routes>
        <Route exact path="/" element={ <Todolist input="required"
        title="To-Do-List"
        onClick={(id) => {
          done(id);
        }}
        action="done"
        list={Details.filter((item) => item.status === "new")}
      />} />
     
     
     
      <Route exact path="/completedlist" element={ <Todolist
        title="Completed-List"
        onClick={(id) => {
          deleted(id);
        }}
        action="delete"
        list={Details.filter((item) => item.status === "completed")}
      />} />
      <Route exact path="/deletedlist" element={ <Todolist
        title="Deleted-List"
      
        list={Details.filter((item) => item.status === "deleted")}
      />} />
     
         </Routes>
    </div>
    </Router>
  );
}

export default App;
