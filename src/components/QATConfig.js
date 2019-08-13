import React from "react";
import NMListTable from "./subcomponents/NMListTable";

class QATConfig extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                {this.props.isOpen && <NMListTable/>}
            </div>
        );
    }
}

export default QATConfig;