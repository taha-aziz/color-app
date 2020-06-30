import React from "react";

class MiddleBox extends React.Component {
    render() {
        return (
            <div className="middle-box" style={{backgroundColor: `${this.props.color}`}}>
                {this.props.children}
            </div>
        )
    }
}

export default MiddleBox;