import React from "react";
import Collapsible from "react-collapsible";

class RequestStatsCollapsible extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Collapsible trigger={<span>Request ID: {this.props.requestId}</span>}>
                    <div>test text</div>
                </Collapsible>
            </div>
        );
    }
}

export default RequestStatsCollapsible;