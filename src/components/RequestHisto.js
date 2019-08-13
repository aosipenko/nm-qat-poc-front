import React from "react";

class RequestHisto extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <p>
                {this.props.isOpen &&
                <div>
                    This is a Histo stub
                </div>
                }
            </p>
        );
    }
}

export default RequestHisto;