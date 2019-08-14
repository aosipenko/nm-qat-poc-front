import React from "react";

class RequestHistoCollapsible extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {this.state.elements}
            </div>
        );
    }
}