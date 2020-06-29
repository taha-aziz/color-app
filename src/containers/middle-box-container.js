import React from 'react';
import MiddleBox from '../components/middle-box';
import InteriorBoxCon from '../containers/interior-box-container';

class MiddleBoxCon extends React.Component {
    render() {
        return (
            <MiddleBox>
                <InteriorBoxCon>
                </InteriorBoxCon>
            </MiddleBox>
        )
    }
}

export default MiddleBoxCon;