import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import './App.css';

class App extends Component {
  state = {
    tasks: [
      {
        "name": "Eason",
        "task": "Go to store"
      },
      {
        "name": "Eason",
        "task": "Learn React.js"
      },
      {
        "name": "Vivian",
        "task": "Cook dinner"
      }
    ]
  };

  removeTask = index => {
    const {tasks} = this.state;

    this.setState({
      tasks: tasks.filter((task, i) => {
        return i !== index
      })
    });
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center">To Do List</h2>
        <Table
          tasks={this.state.tasks}
          removeTask={this.removeTask}
        />
        {/* <Form /> */}
      </div>
    );
  }
}

export default App;
