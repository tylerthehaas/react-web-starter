import React, { Component } from 'react'
import Item from './Item'

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
    this.state.todos.push({ id: Date.now(), text })
  }

  inputTextHandler = ({ value: inputText }) => this.setState({ inputText })

  render() {
    const { todos } = this.state
    return (
      <div>
        <div class="todo-list">
          {todos.map(v => <Item key={v.id} text={v.text} />)}
        </div>
        <AddTodo inputHandler={inputTextHandler} btnHandler={addTodoHandler} />
      </div>
    )
  }
}
