import React from "react";
import FooterButton from "./FooterButton";
import DestroyAllButton from "./DestroyAllButton";

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
            <DestroyAllButton 
                destroyCompleted={this.props.destroyCompleted} 
                display={this.props.isDestroyAll ? "none" : "block"}>
                    {this.props.isDestroyAll ? "Clear completed" : ""}
            </DestroyAllButton>
          </footer>
        );
    }
}

export default Footer;