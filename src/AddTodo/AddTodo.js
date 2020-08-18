import React from 'react';
import '../App.css';

function AddTodo(props) {
    return(
      <div className="Input-text">
              <input type='text' value={props.valueTodo} onChange={props.changeValue} onKeyPress={props.keyPress} id="todo"  placeholder="What need to be done?"/>
      </div>
    )
  }
  export default AddTodo;