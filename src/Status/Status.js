import React from 'react';
import '../App.css';

function Status(props) {
    const numberOfTodo = props.todo.length;
    let status = numberOfTodo > 0 ? 
    <p>Total Todos: {numberOfTodo} pcs</p> : 
    <p>Nothing Todos for today</p>
    return( 
        <div>
            {status}
        </div>
    )
}
export default Status;