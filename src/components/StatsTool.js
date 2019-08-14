import React from "react";
import RequestStatsCollapsible from "./subcomponents/RequestStatsCollapsible";

class StatsTool extends React.Component{
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

        return(
            <p>
                {this.props.isOpen && <div>
                    {this.state.displayedElements}
                </div>}
            </p>
        );
    }
}

export default StatsTool;