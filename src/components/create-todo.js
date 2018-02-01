import React from 'react'


export default class TodosList extends React.Component {


  render() {
      console.log(this.props);
    return (
      <form>
        <input type="text" placeholder="Add Task" />
        <button>Add</button>
      </form>
    );
  }
}
