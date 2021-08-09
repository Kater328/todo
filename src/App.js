import "./App.css";
import React from "react";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  createTodo = (title) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {id: Date.now(), title, completed: false}
      ]
    });
  }

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(
        item =>
          item.id === id ?
          {...item, completed: !item.completed} :
          item
          )
      }
    );
  }

  destroyTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
      }
    );
    console.log(this.state.todos);
  }

  render() {
    return (
      <section className="todoapp">
        <Header createTodo={this.createTodo} />
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} destroyTodo={this.destroyTodo}/>
      </section>
    );
  }
}

export default App;