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
      checkedAll: false
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
    this.updateCheckedAll(false);
  }

  destroyTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
      }
    );
  }

  updateCheckedAll = (condition) => {
    this.setState((state) => ({
      checkedAll: state.todos.some( function(item) {
          return item.completed === false;
      }) ? condition : !condition
    }));
  }

  toggleAll = () => {
    this.updateCheckedAll(true);
    this.setState((state) => ({
      todos: state.todos.map(
        item => ({...item, completed: state.checkedAll})
      )
    }));
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
        count={this.state.todos.filter(
          item => item.completed === false
        ).length}
        showAllElements={this.showAllElements}
        showActiveElements={this.showActiveElements}
        showCompletedElements={this.showCompletedElements}/>
    );
  }

  render() {
    return (
      <section className="todoapp">
        <Header createTodo={this.createTodo} />
        <TodoList 
          todos={this.state.todos}
          checkedAll={this.state.checkedAll}
          toggleTodo={this.toggleTodo} 
          destroyTodo={this.destroyTodo}
          toggleAll={this.toggleAll}/>
        {this.addFooter()}
      </section>
    );
  }
}

export default App;