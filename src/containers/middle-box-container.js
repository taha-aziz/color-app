import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/changeColors';
import MiddleBox from '../components/middle-box';
import InteriorBoxCon from '../containers/interior-box-container';

class MiddleBoxCon extends React.Component {
    render() {
        return (
            <MiddleBox color={this.props.colors[1]}>
                <InteriorBoxCon>
                </InteriorBoxCon>
            </MiddleBox>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(MiddleBoxCon);