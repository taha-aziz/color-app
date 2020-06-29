import React from 'react';
import ExteriorBox from '../components/exterior-box';
import MiddleBoxCon from '../containers/middle-box-container';

class ExteriorBoxCon extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <ExteriorBox>
                    <MiddleBoxCon>
                    </MiddleBoxCon>
                </ExteriorBox>
            </div>
        )
    }
}

export default ExteriorBoxCon;