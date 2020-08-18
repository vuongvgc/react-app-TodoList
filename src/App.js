import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';
import Headers from './Layout/Header';
import Footers from './Layout/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
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
      todoList[length] = this.state.value;
      this.setState({
        value: '',
        todo: todoList
      });
    }
  }
  handleChange(event) {
    this.setState({value: event.target.value
    });
    event.preventDefault()
  }

  handleTodo(event) {
    let todoList = this.state.todo.slice();
      const length =  this.state.todo.length;
      todoList[length] = this.state.value;
      this.setState({
        value: '',
        todo: todoList
      });
    event.preventDefault()

  }
  deleteTodo(value) {
    let todoList = this.state.todo.slice();
    todoList.splice(todoList.indexOf(value), 1);
    this.setState({
      value: '',
      todo: todoList
    });
  }
  render() {
    return (
      <div className="App">
        <Headers />
        <AddTodo valueTodo={this.state.value} changeValue={this.handleChange} keyPress={this.keyFunction} click={this.handleTodo}/>
        <TodoList todo={this.state.todo} deleteTodo={this.deleteTodo}/>
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
