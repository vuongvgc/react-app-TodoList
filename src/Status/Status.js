import React from 'react';
import '../App.css';

function Status(props) {
    const numberOfTodo = props.todo.length;
    let status = numberOfTodo > 0 ? 
    <p>Total Todo: {numberOfTodo} pcs</p> : 
    <p>Nothing Todo for today</p>
    return(
        <div>
            {status}
        </div>
    )
}
export default Status;