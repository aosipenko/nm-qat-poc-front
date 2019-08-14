import React from "react";
import Collapsible from "react-collapsible";
import RequestResultDetails from "./RequestResultDetails";

class RequestResultCollapsible extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Collapsible trigger={
                <span>Request ID: {this.props.requestData.id} from {this.props.requestData.date} seq {this.props.requestData.seq}</span>}>
                <RequestResultDetails/>
            </Collapsible>
        );
    }
}

export default RequestResultCollapsible;