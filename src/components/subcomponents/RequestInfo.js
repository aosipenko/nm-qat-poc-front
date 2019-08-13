import React from "react";
import Collapsible from "react-collapsible";

class RequestInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {nmInstances:[]};
    }

    render() {

        this.props.nmList.map(nm => {
           this.state.nmInstances.push(<p>{nm}</p>);
        });
        return (
            <div>
                {
                    //input should either contain request ID, or be clear to display every request
                    <Collapsible trigger={<span>Request ID: {this.props.requestId}</span>}>
                        <div>List of affected NM services:</div>
                        {this.state.nmInstances}
                    </Collapsible>
                }
            </div>
        );
    }
}

export default RequestInfo;