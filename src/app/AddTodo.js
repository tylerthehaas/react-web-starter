import React from 'react'

export default ({ btnHandler, inputHandler, inputText }) => (
  <div>
    <input onChange={inputHandler} value={inputText} />
    <button onClick={btnHandler}>Add Todo</button>
  </div>
)
