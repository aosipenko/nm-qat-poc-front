import React from "react";

class StatsTool extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <p>
                {this.props.isOpen && <div>This is a stats stub</div>}
            </p>
        );
    }
}

export default StatsTool;