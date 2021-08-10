import React from "react";

class TodoItem extends React.Component {

    defineLiClasses = (item) => {
        let completed = item.completed ? "completed" : "";
        let editing = item.editing ? "editing" : "";
        console.log(completed + " " + editing);
        return (completed + " " + editing);
    }

    render() {
        return(
            <li className={this.defineLiClasses(this.props.item)}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={this.props.item.completed}
                        onChange={() => this.props.toggleTodo(this.props.item.id)} />
                    <label onDoubleClick={() => this.props.changeTodoLabel(this.props.item.id, true)}>
                        {this.props.item.title}
                    </label>
                    <button 
                        className="destroy"
                        onClick={() => this.props.destroyTodo(this.props.item.id)}/>
                </div>
                {this.props.item.editing ? 
                    <input
                        className="edit"
                        autoFocus
                        value={this.props.item.title}
                        onChange={this.props.onChangeInput(this.props.item.id, (Event))}
                        onKeyPress={this.props.onKeyPress(this.props.item.id, (Event))}/>
                     : ""}
            </li>
        );
    }
}
export default TodoItem;