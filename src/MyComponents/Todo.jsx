import React from 'react'

export const Todo=(props)=> {
  return (
    <div>
        <h4>{props.todo.title}</h4>
        <p>{props.todo.desc}</p>
        <button className="btn  btn-sm btn-danger" onClick={()=>props.OnDelete(props.todo)}> Delete </button>
    </div>
  );
};
