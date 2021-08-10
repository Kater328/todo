import "./App.css";
import React from "react";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import Footer from "./Components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = ["All", "Active", "Completed"];

    this.state = {
      todos: [],
      checkedAll: false,
      selectedFilter: "All"
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

  changeTodoTitle = (id, newTitle) => {
    this.setState({
      todos: this.state.todos.map(
        item =>
          item.id === id ?
          {...item, title: newTitle} :
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
    if(this.state.todos.length < 2) this.setState({checkedAll: false});
  }

  destroyCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
      }
    );
    this.setState({checkedAll: false});
  }

  updateCheckedAll = (status) => {
    this.setState((state) => ({
      checkedAll: state.todos.some( function(item) {
          return !item.completed;
      }) ? status : !status
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

  changeSelectedFilter = (currentButton) => {
    this.setState({selectedFilter: currentButton});
  }

  render() {
    return (
      <section className="todoapp">
        <Header createTodo={this.createTodo} />
        <TodoList 
          selectedFilter={this.state.selectedFilter}
          filters={this.buttons}
          todos={this.state.todos}
          checkedAll={this.state.checkedAll}
          toggleTodo={this.toggleTodo} 
          destroyTodo={this.destroyTodo}
          toggleAll={this.toggleAll}
          changeTodoTitle={this.changeTodoTitle}/>
        {
          this.state.todos.length > 0 && 
          <Footer 
            count={this.state.todos.filter(item => !item.completed).length}
            isDestroyAll={this.state.todos.some(item => item.completed)}
            filters={this.buttons}
            selected={this.state.selectedFilter}
            changeSelected={this.changeSelectedFilter}
            showAllElements={this.showAllElements}
            showActiveElements={this.showActiveElements}
            showCompletedElements={this.showCompletedElements}
            destroyCompleted={this.destroyCompleted}/>
        }
      </section>
    );
  }
}

export default App;