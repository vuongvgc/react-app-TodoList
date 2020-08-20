import React from 'react';
import '../App.css';

class ListItem extends React.Component {
    render() {
        return(
            <li className="ListItem">
                <input type="checkbox" checked={this.props.isDone} />
                <p>{this.props.value}</p>
                <button onClick={() => this.props.click(this.props.value)} >X</button>
            </li>
        ) 
    }
  }
  
class TodoList extends React.Component {
    render(){
        const todoData = this.props.todo;
        console.log(todoData);
        const listItems = todoData.map((current) =>
        // Correct! Key should be specified inside the array.
        <ListItem   key={current.id}
                    value={current.todoText}
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