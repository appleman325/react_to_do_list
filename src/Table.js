import React, { Component } from 'react';

const TableHeader = () => {
  return(
    <thead>
      <tr>
        <th>Name</th>
        <th>Task</th>
        <th>Action</th>
      </tr>
    </thead>
  );
}

const TableBody = props => {
  const rows = props.tasks.map((row, index) => {
    return(
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.task}</td>
        <td>
          <button className="btn btn-warning" onClick={() => props.removeTask(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const {tasks, removeTask} = this.props;

    return(
      <table className="table table-dark">
        <TableHeader />
        <TableBody
          tasks={tasks}
          removeTask={removeTask}
        />
      </table>
    );
  }
}

export default Table;
