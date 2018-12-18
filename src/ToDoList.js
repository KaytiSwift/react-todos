import React, {Component} from 'react';

class ToDoList extends Component {
    render() {
        const {todos} = this.props;
        const todoList = todos.map(t => <li key={t}>{t}</li>)
        return(
            <div>
                <ul>
                    {todoList}
                </ul>
            </div>
        );
    }
}

export default ToDoList;