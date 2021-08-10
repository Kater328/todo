import React from "react";

class DestroyAllButton extends React.Component {
    render() {
        return (
            <button 
                className="clear-completed" 
                display={this.props.display}
                onClick={this.props.destroyCompleted}>
                    {this.props.children}
            </button>
        )
    }
}
export default DestroyAllButton;