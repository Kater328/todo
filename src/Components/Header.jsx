import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
        };
    }

    onKeyPress = (e) => {
        if(e.key === "Enter") {
            this.props.createTodo(this.state.value);
            this.setState({value: ""});
        }
    }

    render() {
        return(
			<header className="header">
				<h1>todos</h1>
				<input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value={this.state.value}
                    onChange={(e) => this.setState({value: e.target.value})}
                    onKeyPress={this.onKeyPress} />
			</header>
        );
    }
}

export default Header;