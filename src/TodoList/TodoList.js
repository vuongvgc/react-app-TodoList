import React from 'react';
import '../App.css';

function ListItem(props) {
        return(
            <li className="ListItem">
                <input type="checkbox" checked={props.isDone} />
                <p>{props.value}</p>
                <button onClick={() => props.click(props.id)}>X</button>
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
                        id = {current.id}
                        click={(a) => this.props.deleteTodo(a)}
                        isDone={this.props.isDone} />
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