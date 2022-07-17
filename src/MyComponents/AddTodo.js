
import React, { useState } from "react"

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Title or Description can't be blank")
            return;
        }

        props.addTodo(title,desc);
    }
    return (
        <div className='container my-3'>
            <h3 className="text-center">Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label h4">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label h4">Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}className="form-control"  id="exampleInputPassword1" />
                </div>
                <div className="container bg-light">
        <div className="col-md-12 text-center">
            <button type="submit" className="btn btn-primary " style={{backgroundColor:"green"}}>Add To List</button>
        </div>
    </div>
            </form>
        </div>
    )
}
