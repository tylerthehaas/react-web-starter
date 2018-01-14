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
    const { inputText } = this.state
    if (!inputText) return
    this.state.todos.push({ id: Date.now(), text: inputText })
  }

  inputTextHandler = text => (this.state.inputText = text)

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
