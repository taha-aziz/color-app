import React from 'react';

class ExteriorBox extends React.Component {
    render() {
        return (
            <div className="exterior-box">
                {this.props.children}
            </div>
        )
    }
}

export default ExteriorBox;