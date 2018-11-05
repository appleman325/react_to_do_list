import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      task: ''
    }

    this.state = this.initialState;
  }

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({
      [name] : value
    });
  }

  addTask = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
    console.log(this.state);
  }

  render() {
    const {name, task} = this.state;

    return(
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Tasks</label>
          <input
            type="text"
            name="task"
            value={task}
            className="form-control"
            onChange={this.handleChange}
          />
        </div>
        <input
          type="button"
          value="Add"
          className="btn btn-primary"
          onClick={this.addTask}
        />
      </form>
    );
  }
}

export default Form;
