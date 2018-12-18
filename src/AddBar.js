import React, { Component } from 'react';

class AddBar extends Component {
    render() {
        const {currentText, setText, addToDo} = this.props;
        return (
            <div>
                <input type="text" 
                value={currentText} 
                onChange={setText}/>
                <button onClick={addToDo}>Add</button>
            </div>
        );
    }
}

export default AddBar;