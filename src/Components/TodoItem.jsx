import React from "react";

class TodoItem extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            editing: false,
            value: this.props.item.title,
        };
    }

    defineLiClasses = (item) => {
        let completed = item.completed ? "completed" : "";
        let editing = this.state.editing ? "editing" : "";
        return (completed + " " + editing);
    }

    changeTodoLabel = () =>{
        this.setState({editing: true});
    }

    onKeyPress = (id) => (e) => {
        if(e.key === "Enter" || e.type === 'blur') {
            if(this.state.value.trim() === "") {
                this.props.destroyTodo(id);
            } else {
                this.setState({editing: false});
                this.props.changeTodoTitle(id, this.state.value);
            }
        }
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
                    <label onDoubleClick={this.changeTodoLabel}>
                        {this.props.item.title}
                    </label>
                    <button 
                        className="destroy"
                        onClick={() => this.props.destroyTodo(this.props.item.id)}/>
                </div>
                {this.state.editing ? 
                    <input
                        className="edit"
                        autoFocus
                        value={this.state.value}
                        onChange={(e) => this.setState({value: e.target.value})}
                        onKeyPress={this.onKeyPress(this.props.item.id, (Event))}
                        onBlur={this.onKeyPress(this.props.item.id, (Event))}/>
                     : ""}
            </li>
        );
    }
}
export default TodoItem;