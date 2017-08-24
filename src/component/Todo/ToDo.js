import React, { Component } from "react";

import AddTask from "./AddTask.js";
import TodoList from "./TodoList.js";

import Header from "../index/Header.js"

import Paper from 'material-ui/Paper';

class ToDo extends Component {
  constructor(props){
    super(props)
    var task = [];
    var taskList = localStorage.getItem('storedTasks')
    if(taskList) {
      task = JSON.parse(taskList)
    }
    this.state ={
      task: task
    }
  }

  updateList(value){
    const updateTask = this.state.task
    updateTask.push(value);
    this.setState({task: updateTask})
    this.updateLocalStorage(updateTask);
  }
  
  removeTask(value){
    const updateTask = this.state.task
    updateTask.splice(updateTask.indexOf(value), 1);
    this.setState({task: updateTask});

    this.updateLocalStorage(updateTask);
  }

  updateLocalStorage(updateTask){
    console.log(updateTask)
    localStorage.setItem("storedTasks", JSON.stringify(updateTask));
    
  }


  render() {
    return (
      <div>
        <Header title="TODO"/>

        <h1> TODO APP </h1>
        <AddTask updateList={this.updateList.bind(this)}/>
        <TodoList item= {this.state.task} remove={this.removeTask.bind(this)}
        
        />
      </div>
    );
  }
}

export default ToDo;
