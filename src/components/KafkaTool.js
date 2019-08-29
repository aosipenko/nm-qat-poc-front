import React from "react";
import {putMessage, retrieveMessageList} from "../net/KafkaRestService";


class KafkaTool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pageMsg: "this is fine!"};
    }

    render() {
        return (
            <div>
                {this.props.isOpen &&
                <div>
                    <div>
                        <button onClick={() => putMessage("test message")
                            .catch(error => {
                                console.log(error)
                            })}>Push message
                        </button>
                    </div>
                    <div>
                        <button onClick={() => retrieveMessageList()
                            .then(resp => resp.json())
                            .then(res => {
                                this.setState({pageMsg: res});
                            })
                            .catch(error => {
                                console.log(error)
                            })}>Get message List
                        </button>
                        {this.state.pageMsg}
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default KafkaTool;