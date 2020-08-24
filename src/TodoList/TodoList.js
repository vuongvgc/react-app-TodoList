import React from 'react';
import '../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle,  faTrashAlt} from '@fortawesome/free-solid-svg-icons';



function ListItem(props) {
    const todo = props.isActive 
        ? <p className="Todotext"><del>{props.value}</del></p> 
        : <p>{props.value}</p>;
    const isActive = props.isActive;
        return(
            <li className="ListItem">
                <FontAwesomeIcon 
                    className ='font-awesome icon__footer' 
                    icon={isActive ? faCheckCircle : faCircle}
                    onClick={() => props.clickDone(props.id)}  />
                <p>{todo}</p>                
                <FontAwesomeIcon 
                    className ='font-awesome icon__footer' 
                    icon={faTrashAlt}
                    onClick={() => props.clickDelete(props.id)}  />
            </li>
        ) 
  }
class TodoList extends React.Component {
    checkStatus = (status) => {
        let todoData;
        const data = this.props.todo
        if(status === 'all') {
            todoData = data
        
        }
        else if(status === 'active') {
            todoData =  data.filter((todo) => todo.isActive === false)
        }
        else {
            todoData = data.filter((todo) => todo.isActive === true)
        }
        return todoData;
    }
    render(){
        const todoData = this.checkStatus(this.props.status);
        console.log(todoData)
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