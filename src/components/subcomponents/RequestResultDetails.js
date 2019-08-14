import React from "react";
import ReactTable from "react-table";
import RecallDetails from "./RecallDetails";
import Popup from "reactjs-popup";
import "../style/Popup.css";

const mydata = [
    {
        details: "Response Time",
        nm1: "5 ms",
        nm2: "6 ms",
        nm3: "4 ms"
    },
    {
        details: "Precision",
        nm1: "80%",
        nm2: "90%",
        nm3: "95%"
    },
    {
        details: "Recall",
        nm1: "15",
        nm2: "16",
        nm3: "14"
    }
];

const myColumns = [
    {
        Header: "Details \\ NM Instance",
        accessor: "details"
    },
    {
        Header: "NM 1 Instance 1",
        accessor: "nm1"
    },
    {
        Header: "NM 2 Instance 1",
        accessor: "nm2"
    },
    {
        Header: "NM 2 Instance 2",
        accessor: "nm3"
    }
];

class RequestResultDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {detailsState: false};

        this.toggleDetails = this.toggleDetails.bind(this);
    }

    render() {
        return (
            <div>
                <ReactTable
                    manual
                    minRows={0}
                    data={mydata}
                    columns={myColumns}
                    showPagination={false}
                />
                <Popup trigger={<button>Details</button>}>
                    <RecallDetails isOpen={this.state.detailsState} toggle={this.toggleDetails}/>
                </Popup>


            </div>
        );
    }

    toggleDetails(key) {
        let newState = !this.state.detailsState;
        this.setState({detailsState: newState});
    }
}

export default RequestResultDetails;