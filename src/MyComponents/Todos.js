import React from 'react'
import {Todo} from "./Todo"

export const Todos=(props)=> {


  return (
    <div className='container my-3' style={{minHeight:"70vh"}}>
        <h3 className='text-center my-3'>Todos List</h3>
        {props.todos.length===0?"No Tasks to Display":
          
            (props.todos.map((val)=>{
              return(
              <Todo todo={val} key={val.sno} OnDelete={props.OnDelete}/>
              )
            }))
          
        }
    </div>
  );
};
