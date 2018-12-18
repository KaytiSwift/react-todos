import React, { Component } from 'react';
import ToDoList from './ToDoList';
import AddBar from './AddBar';

class ToDos extends Component {
    render() {
        const {currentText, setText, addToDo, todos} = this.props;
        return (
            <div>
                <AddBar 
                    currentText={currentText} 
                    setText={setText} 
                    addToDo={addToDo}/>
                <ToDoList todos={todos}/>
            </div>
        );
    }
}

export default ToDos;