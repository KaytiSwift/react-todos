import React, { Component } from 'react';
import ToDos from './ToDos';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: ["A", "B", "C"],
      currentText: 'f'
    };
  }

  setText = (e) => {
    const newValue = e.target.value;
    this.setState({currentText: newValue})
  }

  addToDo = () => {
    const newToDo = this.state.currentText;
    const todos = [...this.state.todos, newToDo]
    this.setState({ todos, currentText: '' })
  }

  render() {
    const {currentText, todos} = this.state;
    return (
      <div >
        <ToDos 
        currentText={currentText}
        setText={this.setText}
        addToDo={this.addToDo} 
        todos={todos}/> 
        
      </div>
    );
  }
}

export default App;
