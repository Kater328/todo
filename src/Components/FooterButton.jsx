import React from "react";

class FooterButton extends React.Component {

    defineClass = (selected, currentButton) => {
        if(selected === currentButton) return "selected";
        return "";
    }

    render() {
        return (
            <li>
                <a href="#/" 
                    className={this.defineClass(this.props.selected, this.props.children)} 
                    onClick={() => this.props.changeSelected(this.props.children)}>
                    {this.props.children}
                </a>
            </li>
        );
    }
}

export default FooterButton;