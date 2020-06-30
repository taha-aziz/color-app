import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/changeColors';
import ExteriorBox from '../components/exterior-box';
import MiddleBoxCon from '../containers/middle-box-container';

class ExteriorBoxCon extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <ExteriorBox color={this.props.colors[0]}>
                    <MiddleBoxCon>
                    </MiddleBoxCon>
                </ExteriorBox>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(ExteriorBoxCon);