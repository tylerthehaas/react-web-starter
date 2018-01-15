import React, { Component } from 'react'
import Item from './Item'
import AddTodo from './AddTodo'

export class Todo extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      inputText: '',
    }
  }

  addTodoHandler = () => {
    const { inputText: text } = this.state
    if (!text) return
    const todos = [...this.state.todos, { id: Date.now(), text }]
    this.setState({ todos, inputText: '' })
  }

  inputTextHandler = ({ target: { value: inputText } }) =>
    this.setState({ inputText })

  render() {
    const { todos, inputText } = this.state
    return (
      <div>
        <AddTodo
          btnHandler={this.addTodoHandler}
          inputHandler={this.inputTextHandler}
          inputText={inputText}
        />
        <ul className="todo-list">
          {todos.map(v => <Item key={v.id} text={v.text} />)}
        </ul>
      </div>
    )
  }
}
