import React from "react";
import ReactTable from "react-table";
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import {FaWindowClose} from "react-icons/fa";

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

        this.state = {
            showFiltered: false,
            displayData: mydata
        };

        this.toggleSearchConditions = this.toggleSearchConditions.bind(this);
    }

    render() {
        return (
            <div className={"popup"}>
                <div className={"popup_inner"}>
                    <FaWindowClose className={"closePopup"} onClick={this.props.closeModal}
                                   onMouseUp={this.props.closeModal}/>
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
                        <table className={"toggle-module"}>
                            <tr>
                                <td><span>Show only differences</span></td>
                                <td><Toggle onChange={this.toggleSearchConditions}
                                            defaultChecked={this.state.showFiltered}/></td>
                            </tr>
                        </table>
                    </p>
                </div>
            </div>
        );
    }

    toggleSearchConditions(event) {
        console.log("Event source state " + event.target.value);
        //invert current state
        this.setState({showFiltered: !this.state.showFiltered});
        let filteredData = [];

        //a stub until i find a good solution for set state logic
        if (!this.state.showFiltered) {
            mydata.map(d => {
                if (d.nm1 !== d.nm2 || d.nm1 !== d.nm3 || d.nm2 !== d.nm3) {
                    filteredData.push(d);
                }
            });
        } else {
            filteredData = mydata;
        }

        this.setState({displayData: filteredData});
    }
}

export default RecallDetails;