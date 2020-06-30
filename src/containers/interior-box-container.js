import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/changeColors';
import InteriorBox from '../components/interior-box';

class InteriorBoxCon extends React.Component {
    render() {
        return (
            <InteriorBox colors={this.props.colors.slice(2)}></InteriorBox>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(InteriorBoxCon);