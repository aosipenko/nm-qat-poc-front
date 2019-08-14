import React from "react";
import RequestResultCollapsible from "./subcomponents/RequestResultCollapsible.js";

class RequestHisto extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            requestsList: [], filteredRequests: [
                <RequestResultCollapsible requestData={{id: 1, date: "2018-02-18 19:22:01", seq: 4}}/>,
                <RequestResultCollapsible requestData={{id: 2, date: "2018-02-18 17:31:43", seq: 3}}/>,
                <RequestResultCollapsible requestData={{id: 3, date: "2018-02-17 20:56:37", seq: 2}}/>,
                <RequestResultCollapsible requestData={{id: 4, date: "2018-02-16 20:11:20", seq: 1}}/>
            ]
        };
    }

    render() {

        return (
            <p>
                {this.props.isOpen &&
                <div>
                    {this.state.filteredRequests}
                </div>
                }
            </p>
        );
    }
}

export default RequestHisto;