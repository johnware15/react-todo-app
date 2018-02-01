import React from 'react'


export default class TodosList extends React.Component {


  render() {
      console.log(this.props);
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="Add Task" ref="createInput" />
        <button>Add</button>
      </form>
    );
  }

  handleCreate(event) {
    event.preventDefault()

    this.props.createTask(this.refs.createInput.value)
    this.refs.createInput.value = ''
  }
}
