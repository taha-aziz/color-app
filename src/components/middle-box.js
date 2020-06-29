import React from "react";

class MiddleBox extends React.Component {
    render() {
        return (
            <div className="middle-box">
                {this.props.children}
            </div>
        )
    }
}

export default MiddleBox;