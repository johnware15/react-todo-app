import React from 'react'
import CreateTodo from './create-todo'
import TodosList from './todos-list'

const todos = [
  {
    task: 'Make React tutorial',
    isCompleted: false
  },
  {
    task: 'Eat Breakfast',
    isCompleted: true
  }
]

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos
    }
  }

  render() {
    return (
      <div>
        <h1>React ToDos App</h1>
        <CreateTodo createTask={this.createTask.bind(this)} />
        <TodosList
          todos={ this.state.todos }
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
        />
      </div>
    );
  }

  toggleTask(task) {
    const foundToDo = _.find(this.state.todos, todo => todo.task === task)
    foundToDo.isCompleted = !foundToDo.isCompleted
    this.setState({ todos: this.state.todos })
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    })
    this.setState({ todos: this.state.todos })
  }

  saveTask(oldTask, newTask) {
    const foundToDo = _.find(this.state.todos, todo => todo.task === oldTask)

    foundToDo.task = newTask
    this.setState({ todos: this.state.todos })
  }
}
