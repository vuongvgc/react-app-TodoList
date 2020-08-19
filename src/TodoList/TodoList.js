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
    const todo = props.todo;
    return (
        <div className="Todo-List">
            <ol>
                {todo.map((todo) =>
                <ListItem 
                key={todo.toString()}
                value={todo}
                click={(a) => props.deleteTodo(a)}
                isDone={props.isDone} />
                )}
            </ol>
        </div> 
    );
  }
export default TodoList;