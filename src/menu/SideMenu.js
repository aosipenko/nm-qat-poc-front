import * as React from "react";
import './SideMenu.css';

class SideMenu extends React.Component {

    constructor(props) {
        super(props);
    }

      render() {
        return (
            <div className="SideMenu">
                <button onClick={() => this.props.toggleConfig("openConfig")}>QA Tool config</button>
                <button onClick={() => this.props.toggleConfig("openRM")}>Request Manager</button>
                <button onClick={() => this.props.toggleConfig("openHisto")}>Request History</button>
                <button onClick={() => this.props.toggleConfig("openStats")}>Statistics Tool</button>
                <button onClick={() => this.props.toggleConfig("openKafka")}>Kafka Service</button>
            </div>
        );
    }
}

export default SideMenu;