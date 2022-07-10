import logo from './logo.svg';
import './App.css';
import React from "react"
import Header from "./MyComponents/Header"
import Footer from './MyComponents/Footer'
import Todos from './MyComponents/Todos'
import Todo from './MyComponents/Todo'

function App() {
  return (
    <>
    <Header title="TO DO LIST" searchBar={true}/>
    <Todos/>
    <Todo/>
    <Footer/>
    </>
  );
}

export default App;
