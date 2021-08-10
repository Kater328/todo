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
        {id: Date.now(), title, completed: false, editing: false}
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

  changeTodoLabel = (id, status) => {
    this.setState({
      todos: this.state.todos.map(
        item =>
          item.id === id ?
          {...item, editing: status} :
          item
          )
      }
    );
  }

  onChangeInput  = (id) => (e) => {
    this.setState({
      todos: this.state.todos.map(
        item =>
          item.id === id ?
          {...item, title: e.target.value} :
          item
          )
      }
    );
  }

  onKeyPress = (id) => (e) => {
    if(e.key === "Enter") {
      if(this.state.todos.filter(item => item.id === id)[0].title.trim() === "") {
        this.destroyTodo(id);
      } else {
        this.changeTodoLabel(id, false);
      }
    }
  }

  destroyTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
      }
    );
  }

  destroyCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => item.completed === false)
      }
    );
  }

  updateCheckedAll = (status) => {
    this.setState((state) => ({
      checkedAll: state.todos.some( function(item) {
          return item.completed === false;
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

  addFooter = () => {
    if (this.state.todos.length > 0) return (
      <Footer 
        count={this.state.todos.filter(
          item => item.completed === false
        ).length}
        isDestroyAll={this.state.todos.some(item => item.completed === true)}
        filters={this.buttons}
        selected={this.state.selectedFilter}
        changeSelected={this.changeSelectedFilter}
        showAllElements={this.showAllElements}
        showActiveElements={this.showActiveElements}
        showCompletedElements={this.showCompletedElements}
        destroyCompleted={this.destroyCompleted}/>
    );
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
          changeTodoLabel={this.changeTodoLabel}
          onChangeInput={this.onChangeInput}
          onKeyPress={this.onKeyPress}/>
        {this.addFooter()}
      </section>
    );
  }
}

export default App;