import React from "react";
import ToggleCheckbox from "./ToggleCheckbox";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    render() {
        return(
            <section className="main" style={{display: "block"}}>
                <ToggleCheckbox 
                    toggleAll={this.props.toggleAll} 
                    checked={this.props.checkedAll}/>
                <label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
                    {
                        this.props.todos.map(
                            item =>
                            <TodoItem 
                                key={item.id} 
                                item={item} 
                                toggleTodo={this.props.toggleTodo}
                                destroyTodo={this.props.destroyTodo}
                                toggleAll={this.props.toggleAll}
                                changeTodoLabel={this.props.changeTodoLabel}
                                onChangeInput={this.props.onChangeInput}
                                onKeyPress={this.props.onKeyPress}/>
                        )
                    }
                </ul>
			</section>
        );
    }
}

export default TodoList;