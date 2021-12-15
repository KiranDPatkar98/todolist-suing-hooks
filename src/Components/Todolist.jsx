import React  from "react";
import Task from "./Task";
import "./Todolist.css"

function Todolist(props) {
   
return(
    <div className="container">
   <h1>{props.title}</h1>
   <div>{props.list.map((value,index)=><Task key={index}  value={value.text} id={value.id} action={props.action} onClick={(id)=>{props.onClick(id)}}/>)}</div>
  
    </div>
)
}
export default Todolist;