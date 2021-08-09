import "./App.css";
import React from "react";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import Footer from "./Components/Footer";

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
  }

  showAllElements = () => {
    
  }

  showActiveElements = () => {

  }

  showCompletedElements = () => {

  }

  addFooter = () => {
    if (this.state.todos.length > 0) return (
      <Footer 
        count={this.state.todos.length}
        showAllElements={this.showAllElements}
        showActiveElements={this.showActiveElements}
        showCompletedElements={this.showCompletedElements}/>
    );
  }

  render() {
    return (
      <section className="todoapp">
        <Header createTodo={this.createTodo} />
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} destroyTodo={this.destroyTodo}/>
        {this.addFooter()}
      </section>
    );
  }
}

export default App;