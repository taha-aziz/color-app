import React from 'react';
import '../app/assets/stylesheets/styles.css'

class InteriorBox extends React.Component {
    render() {
        return (
            <div className="interior-box">
                <div className="box-1"></div>
                <div className = "box-2"></div>
                <button> Color Me!</button>
                <div className="box-3"></div>
                <div className="box-4"></div>
            </div>
        )
    }
}

export default InteriorBox;