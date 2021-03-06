import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';
import Headers from './Layout/Header';
import Footers from './Layout/Footer';
import Status from './Status/Status';
import Buttons from './Status/Buttons';
import nextId from "react-id-generator";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textTodo: '',
      status:'all',
      todo: [],
    };    
  }
  keyFunction = (event) => {
    if (event.charCode === 13) {
      let uniqueId = nextId();
      let todoList = this.state.todo.slice();
      let  todoListNew = [{id: uniqueId, todoText: this.state.textTodo, isActive: false}];
      this.setState({
        textTodo: '',
        todo: todoList.concat(todoListNew)
      });
    }
  }
  doneTodo = (id) => {
    let todoList = this.state.todo.slice();
    let idIndex = todoList.findIndex((todo) => todo.id === id );
    todoList[idIndex].isActive = todoList[idIndex].isActive ? false : true;
    this.setState({
      textTodo: '',
      todo: todoList
    });

  }
  handleChange = (event) => {
    this.setState({textTodo: event.target.value});
    event.preventDefault()
  }
  deleteTodo = (value) => {
    let todoList = this.state.todo.slice();
    let idIndex = todoList.findIndex((todo) => todo.id === value );
    todoList.splice(idIndex, 1);
    this.setState({
      textTodo: '',
      todo: todoList
    });
  }
  buttonHandle = (event) => {
    let status;
    const value= event.target.value;
    if(value === 'all') {
      status = 'all'
    }
    else if(value === 'active') {
      status = 'active'
    }
    else {
      status = 'completed'
    }
    return(
      this.setState({
        status: status
      })
    )
  }
  render() {
    const textTodo = this.state.textTodo;
    const todoList = this.state.todo;
    const status = this.state.status;
    return (
      <div className="App">
        <Headers />
        <Status 
          todo={todoList} />
        <Buttons 
          buttonHandle ={this.buttonHandle}
          status={status} />
        <AddTodo 
          valueTodo={textTodo}  
          changeValue={this.handleChange} 
          keyPress={this.keyFunction} 
          click={this.handleTodo}/>
        <TodoList 
          todo={todoList} 
          deleteTodo={this.deleteTodo} 
          doneTodo={this.doneTodo} 
          status={status} />
        <Footers />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
