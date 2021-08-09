import React from "react";
import FooterButton from "./FooterButton";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = ["All", "Active", "Completed"];
        
        this.state = {
            selected: "All"
        };
    }

    changeSelected = (currentButton) => {
        this.setState({selected: currentButton});
        if(currentButton === this.buttons[0]){
            this.props.showAllElements();
        } else if(currentButton === this.buttons[1]) {
            this.props.showActiveElements();
        } else {
            this.props.showCompletedElements();
        }
    }

    render() {
        return (
            <footer className="footer" display="block;">
            <span className="todo-count"><strong>{this.props.count}</strong> items left</span>
            <ul className="filters">
                {
                    this.buttons.map(
                        item =>
                        <FooterButton
                            key={item}
                            selected={this.state.selected}
                            changeSelected={this.changeSelected}>
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