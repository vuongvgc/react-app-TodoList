import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';
import Headers from './Layout/Header';
import Footers from './Layout/Footer';
import Status from './Status/Status'
import nextId from "react-id-generator";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textTodo: '',
      todo: [],
    };    
    this.handleChange = this.handleChange.bind(this);
    this.keyFunction = this.keyFunction.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  keyFunction(event) {
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
  handleChange(event) {
    this.setState({textTodo: event.target.value});
    event.preventDefault()
  }
  deleteTodo(value) {
    let todoList = this.state.todo.slice();
    let idIndex = todoList.findIndex((todo) => todo.id === value );
    todoList.splice(idIndex, 1);
    this.setState({
      textTodo: '',
      todo: todoList
    });
  }
  render() {
    const textTodo = this.state.textTodo;
    const todoList = this.state.todo;
    return (
      <div className="App">
        <Headers />
        <Status todo={todoList} />
        <AddTodo valueTodo={textTodo}  changeValue={this.handleChange} keyPress={this.keyFunction} click={this.handleTodo}/>
        <TodoList todo={todoList} deleteTodo={this.deleteTodo} doneTodo={this.doneTodo} />
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
