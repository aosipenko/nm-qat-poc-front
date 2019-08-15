import React from "react";
import Collapsible from "react-collapsible";
import StatisticsChart from "./CustomChart";

class RequestStatsCollapsible extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Collapsible trigger={<span>Request ID: {this.props.requestId}</span>}>
                    <StatisticsChart/>
                </Collapsible>
            </div>
        );
    }
}

export default RequestStatsCollapsible;