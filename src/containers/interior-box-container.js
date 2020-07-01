import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/changeColors';
import InteriorBox from '../components/interior-box';
import fetch from 'isomorphic-fetch';

class InteriorBoxCon extends React.Component {
    getApi = () => {
        return fetch("http://www.colr.org/json/colors/random/7")
                .then(response => response.json())
                .then(data => {
                    console.log("regular api call:  " + data.matching_colors)
                })
    }
    render() {
        return (
            <InteriorBox apiClick={this.getApi} handleClick={this.props.loadColors} colors={this.props.colors.slice(2)}></InteriorBox>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators)(InteriorBoxCon);