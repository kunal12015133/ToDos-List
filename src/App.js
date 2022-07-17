import './App.css';
import React, { useState } from "react"
import Header from "./MyComponents/Header"
import Footer from './MyComponents/Footer'
import {Todos} from './MyComponents/Todos'
import {AddTodo} from './MyComponents/AddTodo'

function App() {
  const OnDelete=(todo)=>{
    console.log("I am on Delete of todo ",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo=(title,desc)=>{
    console.log("I am adding",title ,desc);
    let sno = todos[(todos.length-1)].sno;
    const myTodo={
      sno:sno+1,
      title:title,
      desc:desc
    }
    console.log(myTodo)
    setTodos([...todos,myTodo])
  }
  const [todos,setTodos]=useState([
    {
      sno :1,
      title:"Go to the market",
      desc :"You need to go to market to do this job done"
    },
    {
      sno :2,
      title:"Go to the Ghat",
      desc :"You need to go to ghat to do this job done"

    },
    {
      sno :3,
      title:"Go to the mall",
      desc :"You need to go to mall to do this job done"

    }
  ]);
  return (
    <>
    <Header title="TO DO LIST" searchBar = {false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} OnDelete={OnDelete}/>
    <Footer/>
    </>
  );
}

export default App;
