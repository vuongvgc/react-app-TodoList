import React from 'react';
import '../App.css';

function ListItem(props) {
    const todo = props.isActive ? <p className="Todotext"><del>{props.value}</del></p> : <p>{props.value}</p>
        return(
            <li className="ListItem">
                <input  type="checkbox" 
                        checked={props.isActive} 
                        onClick={() => props.clickDone(props.id)} />
                <p>{todo}</p>
                <button onClick={() => props.clickDelete(props.id)}>X</button>
            </li>
        ) 
  }
class TodoList extends React.Component {
    render(){
        const todoData = this.props.todo;
        const listItems = todoData.map((current) =>
        // Correct! Key should be specified inside the array.
            <ListItem   key={current.id}
                        value={current.todoText}
                        id={current.id}
                        isActive = {current.isActive}
                        clickDelete={(a) => this.props.deleteTodo(a)}
                        clickDone={(a) => this.props.doneTodo(a)}
                        />
        );
        return (
            <div className="Todo-List">
                <ul>
                    {listItems}
                </ul>
            </div>
             );
    }
}  
export default TodoList;