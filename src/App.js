import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';
import Headers from './Layout/Header';
import Footers from './Layout/Footer';
import Status from './Status/Status';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textTodo: '',
      isDone: [],
      todo: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTodo = this.handleTodo.bind(this);
    this.keyFunction = this.keyFunction.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  keyFunction(event) {
    if (event.charCode === 13) {
      let todoList = this.state.todo.slice();
      const length =  this.state.todo.length;
      todoList[length] = this.state.textTodo;
      this.setState({
        textTodo: '',
        todo: todoList
      });
    }
  }
  handleChange(event) {
    this.setState({textTodo: event.target.value});
    event.preventDefault()
  }

  handleTodo(event) {
    let todoList = this.state.todo.slice();
      const length =  this.state.todo.length;
      todoList[length] = this.state.textTodo;
      this.setState({
        textTodo: '',
        todo: todoList
      });
    event.preventDefault()

  }
  deleteTodo(value) {
    let todoList = this.state.todo.slice();
    todoList.splice(todoList.indexOf(value), 1);
    this.setState({
      textTodo: '',
      todo: todoList
    });
  }
  render() {
    const textTodo = this.state.textTodo;
    const isDone = this.state.isDone;
    const todoList = this.state.todo;
    return (
      <div className="App">
        <Headers />
        <Status todo={todoList} />
        <AddTodo valueTodo={textTodo}  changeValue={this.handleChange} keyPress={this.keyFunction} click={this.handleTodo}/>
        <TodoList isDone={isDone} todo={todoList} deleteTodo={this.deleteTodo}/>
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
