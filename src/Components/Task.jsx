import React from "react"

function Task(props){

    return(
        <div>
            <div>{props.value}</div>
          {props.action &&  <button value={props.id} onClick={(e)=>{props.onClick(e.target.value)}}>{props.action}</button> }
        </div>
    )
}
export default Task;