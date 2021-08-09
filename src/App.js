import "./App.css";
import React from "react";
import Header from "./Components/Header";

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

  render() {
    return (
      <section className="todoapp">
        <Header createTodo={this.createTodo} />
      </section>
    );
  }
}

export default App;