import React from "react";
import FooterButton from "./FooterButton";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer" display="block;">
            <span className="todo-count"><strong>{this.props.count}</strong> items left</span>
            <ul className="filters">
                {
                    this.props.filters.map(
                        item =>
                        <FooterButton
                            key={item}
                            selected={this.props.selected}
                            changeSelected={this.props.changeSelected}>
                                {item}
                        </FooterButton>
                    )
                }
            </ul>
            <button className="clear-completed" display="none;"></button>
          </footer>
        );
    }
}

export default Footer;