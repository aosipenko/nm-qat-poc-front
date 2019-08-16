import * as React from "react";
import ReactTable from "react-table";
import {FaEdit} from 'react-icons/fa';
import "../style/NMListTable.css";
import {getNMInstance} from "../../net/NMService";

const mydata = [
    {
        serverId: "NM v1 instance",
        serverIP: "127.0.0.1",
        serverDesc: "NM v1 server which is used as an 'example'"
    }, {
        serverId: "NM v2 instance 1",
        serverIP: "127.0.0.1",
        serverDesc: "NM v2 server with previous build deployed"
    }, {
        serverId: "NM v2 instance 2",
        serverIP: "127.0.0.1",
        serverDesc: "NM v2 server with latest build deployed"
    }
];

const myColumns = [
    {
        Header: "Name",
        accessor: "serverId"
    },
    {
        Header: "IP Address",
        accessor: "serverIP"
    },
    {
        Header: "Description",
        accessor: "serverDesc"
    },
    {
        Header: "Action",
        Cell: () => <button className={"table-btn"} onClick={() => {
            //TODO: make row editable
            alert("test!");
        }}><FaEdit/></button>
    }
];

class NMListTable extends React.Component {
    render() {
        let randomData = [];
        for (var i = 0; i < 10; i++) {
            let dataInstance = getNMInstance();
            randomData.push({
                serverId: dataInstance.name,
                serverIP: dataInstance.IP,
                serverDesc: dataInstance.desc
            });
        }
        return (
            <div>
                <ReactTable
                    manual
                    minRows={0}
                    data={randomData}
                    columns={myColumns}
                    showPagination={false}
                />
            </div>
        );
    }
}

export default NMListTable;