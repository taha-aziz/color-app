import React from 'react';
import '../app/assets/stylesheets/styles.css';

class InteriorBox extends React.Component {   
    render() {
        return (
            <div className="interior-box">
                <div className="box-1" style={{backgroundColor: `${this.props.colors[0]}`}}></div>
                <div className = "box-2" style={{backgroundColor: `${this.props.colors[1]}`}}></div>
                <button style={{backgroundColor: `${this.props.colors[2]}`}}
                onClick={() => {this.props.handleClick()}}> Color Me!</button>
                <button onClick={() => this.props.apiClick()}>click for api get request</button>
                <div className="box-3" style={{backgroundColor: `${this.props.colors[3]}`}}></div>
                <div className="box-4" style={{backgroundColor: `${this.props.colors[4]}`}}></div>
            </div>
        )
    }
}

export default InteriorBox;