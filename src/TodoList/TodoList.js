import React from 'react';
import '../App.css';

function ListItem(props) {
    return(
        <li className="ListItem">
            <input type="checkbox" checked={props.isDone} />
            <p>{props.value}</p>
            <button onClick={() => props.click(props.value)} >X</button>
        </li>
    ) 
  }
  
function TodoList(props) {
    const todoData = props.todo;
    const listItems = todoData.map((current) =>
    // Correct! Key should be specified inside the array.
    <ListItem   key={current.toString()}
                value={current.todoText}
                click={(a) => props.deleteTodo(a)}
                isDone={props.isDone} />
     );
    return (
    <div className="Todo-List">
        <ul>
            {listItems}
        </ul>
    </div>
    
  );
    }
export default TodoList;