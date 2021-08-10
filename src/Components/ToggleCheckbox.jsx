import React from "react";

class ToggleCheckbox extends React.Component {
    render() {
        return(
            <input 
                id="toggle-all" 
                className="toggle-all" 
                type="checkbox"
                checked={this.props.checked}
                onChange={this.props.toggleAll}/>
        );
    }
}

export default ToggleCheckbox;