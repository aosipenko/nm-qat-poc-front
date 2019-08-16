import React from "react";
import Collapsible from "react-collapsible";
import LineChart from "./LineChart";

class RequestStatsCollapsible extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const responseTimingsData = [
            {
                "id": "NM isntance 1",
                "color": "hsl(199, 70%, 50%)",
                "data": [
                    {
                        "x": "215",
                        "y": 300
                    },
                    {
                        "x": "216",
                        "y": 297
                    },
                    {
                        "x": "218",
                        "y": 305
                    },
                    {
                        "x": "219",
                        "y": 351
                    },
                    {
                        "x": "220",
                        "y": 297
                    }
                ]
            },
            {
                "id": "NM isntance 2",
                "color": "hsl(199, 70%, 50%)",
                "data": [
                    {
                        "x": "215",
                        "y": 312
                    },
                    {
                        "x": "216",
                        "y": 345
                    },
                    {
                        "x": "218",
                        "y": 329
                    },
                    {
                        "x": "219",
                        "y": 294
                    },
                    {
                        "x": "220",
                        "y": 261
                    }
                ]
            },
            {
                "id": "NM isntance 3",
                "color": "hsl(199, 70%, 50%)",
                "data": [
                    {
                        "x": "215",
                        "y": 322
                    },
                    {
                        "x": "216",
                        "y": 274
                    },
                    {
                        "x": "218",
                        "y": 266
                    },
                    {
                        "x": "219",
                        "y": 297
                    },
                    {
                        "x": "220",
                        "y": 269
                    }
                ]
            }
        ];
        const nmPrecisionData = [
            {
                "id": "NM isntance 1",
                "color": "hsl(199, 70%, 50%)",
                "data": [
                    {
                        "x": "215",
                        "y": 95
                    },
                    {
                        "x": "216",
                        "y": 94
                    },
                    {
                        "x": "218",
                        "y": 96
                    },
                    {
                        "x": "219",
                        "y": 90
                    },
                    {
                        "x": "220",
                        "y": 97
                    }
                ]
            },
            {
                "id": "NM isntance 2",
                "color": "hsl(199, 70%, 50%)",
                "data": [
                    {
                        "x": "215",
                        "y": 100
                    },
                    {
                        "x": "216",
                        "y": 90
                    },
                    {
                        "x": "218",
                        "y": 81
                    },
                    {
                        "x": "219",
                        "y": 94
                    },
                    {
                        "x": "220",
                        "y": 99
                    }
                ]
            },
            {
                "id": "NM isntance 3",
                "color": "hsl(199, 70%, 50%)",
                "data": [
                    {
                        "x": "215",
                        "y": 73
                    },
                    {
                        "x": "216",
                        "y": 15
                    },
                    {
                        "x": "218",
                        "y": 80
                    },
                    {
                        "x": "219",
                        "y": 90
                    },
                    {
                        "x": "220",
                        "y": 99
                    }
                ]
            }
        ];

        return (
            <div>
                <Collapsible trigger={<span>Request ID: {this.props.requestId}</span>}>
                    <table>
                        <tr>
                            <td><LineChart chartData={responseTimingsData}
                                           horizontalAxisName={"Sequence ID"}
                                           verticalAxisName={"Response Time MS"}
                                           min={200}
                                           max={400}
                            /></td>
                            <td><LineChart chartData={nmPrecisionData}
                                           horizontalAxisName={"Sequence ID"}
                                           verticalAxisName={"Precision Rate %"}
                                           min={10}
                                           max={110}/></td>
                        </tr>
                    </table>
                </Collapsible>
            </div>
        );
    }


}

export default RequestStatsCollapsible;