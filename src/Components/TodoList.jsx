import React from "react";
import ToggleCheckbox from "./ToggleCheckbox";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {

    createTodoItem = (item) => {
        return(
            <TodoItem 
                key={item.id} 
                item={item} 
                toggleTodo={this.props.toggleTodo}
                destroyTodo={this.props.destroyTodo}
                toggleAll={this.props.toggleAll}
                changeTodoLabel={this.props.changeTodoLabel}
                onChangeInput={this.props.onChangeInput}
                onKeyPress={this.props.onKeyPress}/>
        );
    }

    activateSelectedFilter = (todos) => {
        if (this.props.selectedFilter === this.props.filters[0]) {
            return (todos.map(item => this.createTodoItem(item)))
        } else if (this.props.selectedFilter === this.props.filters[1]) {
            return (todos.map( item => item.completed === false ?
                this.createTodoItem(item) :'' ))          
        }else {
            return (todos.map( item => item.completed === true ?
                this.createTodoItem(item) :'' )) 
        }
    }

    render() {
        return(
            <section className="main" style={{display: "block"}}>
                <ToggleCheckbox 
                    toggleAll={this.props.toggleAll} 
                    checked={this.props.checkedAll}/>
                <label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
                    {
                        this.activateSelectedFilter(this.props.todos)
                    }
                </ul>
			</section>
        );
    }
}

export default TodoList;