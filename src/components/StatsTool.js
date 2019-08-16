import React from "react";
import RequestStatsCollapsible from "./subcomponents/RequestStatsCollapsible";
import {Scrollbars} from 'react-custom-scrollbars';

class StatsTool extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayedElements: [
                <RequestStatsCollapsible requestId={"1"}/>,
                <RequestStatsCollapsible requestId={"2"}/>,
                <RequestStatsCollapsible requestId={"3"}/>,
                <RequestStatsCollapsible requestId={"4"}/>
            ]
        };
    }

    render() {
        return (
            <Scrollbars
                style={{height: '100vh'}}>
                {this.props.isOpen && this.state.displayedElements}
            </Scrollbars>
        );
    }
}

export default StatsTool;