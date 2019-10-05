
import React, { Component } from 'react'
import './App.css'
import TodoList from './TodoList/TodoList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          React Todo - App
        <TodoList />
        </header>
      </div>
    )
  }
}

export default App;
