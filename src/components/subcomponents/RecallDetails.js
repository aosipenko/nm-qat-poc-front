import React from "react";
import ReactTable from "react-table";
import Toggle from 'react-toggle'
import 'react-toggle/style.css'

const mydata = [
    {
        nm1: "Katy Perry",
        nm2: "Katy Perry",
        nm3: "Katy Perry"
    },
    {
        nm1: "Kate Perry",
        nm2: "Kate Perry",
        nm3: ""
    },
    {
        nm1: "Donald Trump",
        nm2: "Donald Trump",
        nm3: "Donald Trump"
    },
    {
        nm1: "D. Trump",
        nm2: "",
        nm3: "D. Trump"
    }
];

const myColumns = [
    {
        Header: "NM1 Result Set",
        accessor: "nm1"
    },
    {
        Header: "NM2 Result Set",
        accessor: "nm2"
    },
    {
        Header: "NM3 Result Set",
        accessor: "nm3"
    }
];

class RecallDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {displayData: mydata};

        this.toggleSearchConditions = this.toggleSearchConditions.bind(this);
    }

    render() {
        return (
            <div className={"popup"}>
                <div className={"popup_inner"}>
                    {
                        <ReactTable
                            manual
                            minRows={0}
                            data={this.state.displayData}
                            columns={myColumns}
                            showPagination={false}
                        />
                    }

                    <p>
                        {/*perhaps a bad solution, but couldn't make a decent CSS alignment*/}
                        <table>
                            <tr>
                                <td><span>Show only differences</span></td>
                                <td><Toggle onChange={this.toggleSearchConditions} defaultChecked={false}/></td>
                            </tr>
                        </table>
                    </p>
                </div>
            </div>
        );
    }

    toggleSearchConditions(event) {
        console.log("Event source state " + event.target.value);
    }
}

export default RecallDetails;