import React from "react";
import "./style/RequestMGRCollapsible.css";
import "./style/RequestManager.css";
import RequestInfo from "./subcomponents/RequestInfo";

class RequestManager extends React.Component {
    constructor(props) {
        super(props);
        //TODO: replace with props param
        let data = [{
            id: 1,
            name: "test1",
            nmList: ["NM v1 1.0.4", "NM v1 1.0.5", "NM v2 v 1.0.1", "NM v2 1.0.2"]
        },{
            id: 2,
            name: "test2",
            nmList: [1, 12, 5]
        },{
            id: "Test RQ",
            name: "test3",
            nmList: [1, 5]
        }];

        this.state = {
            data,
            inputValue: "",
            elements: [],
            activeElements: []
        };

        this.state.data.map(value => {
            this.state.elements.push(
                <RequestInfo requestId={value.id} nmList={value.nmList}/>
            );
        });

        this.state.activeElements = this.state.elements;

        this.updateFieldValue = this.updateFieldValue.bind(this);
    }

    render() {
        return (
            <div>
                {this.props.isOpen &&
                <div>
                    Filter by Request ID: <input className={"request-filter"} value={this.state.inputValue} type="text"
                                                 onInput={this.updateFieldValue}/>
                    {this.state.activeElements}
                </div>}
            </div>
        );
    }

    //This implementation is BAD. Need to improve it using element callback, not this bicycle.
    updateFieldValue(event) {
        this.setState({inputValue: event.target.value});

        let elementsUpd = [];

        this.state.elements.map(e => {
            if (e.props.requestId.toString().includes(event.target.value)) {
                elementsUpd.push(e);
            }
        });
        this.setState({activeElements: elementsUpd});
    }
}

export default RequestManager;