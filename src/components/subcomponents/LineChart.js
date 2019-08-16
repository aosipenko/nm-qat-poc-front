import React from 'react'

import '../style/Charts.css'

import {ResponsiveLine} from '@nivo/line'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

class LineChart extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="chart">
                <ResponsiveLine
                    isInteractive={false}
                    data={this.props.chartData}
                    margin={{top: 50, right: 110, bottom: 50, left: 60}}
                    xScale={{type: 'point'}}
                    yScale={{type: 'linear', stacked: false, min: this.props.min, max: this.props.max}}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: this.props.horizontalAxisName,
                        legendOffset: 40,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 45,
                        legend: this.props.verticalAxisName,
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    colors={{scheme: 'nivo'}}
                    pointSize={12}
                    pointColor={{theme: 'background'}}
                    pointBorderWidth={3}
                    pointBorderColor={{from: 'serieColor'}}
                    pointLabel="y"
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            itemTextColor: "#eee",
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(255, 255, 255, 1)',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    theme={{
                        axis: {
                            tickColor: "#eee",
                            ticks: {
                                line: {
                                    stroke: "#eee"
                                },
                                text: {
                                    fill: "#eee"
                                }
                            },
                            legend: {
                                text: {
                                    fill: "#eee"
                                }
                            }
                        }
                    }}
                />
            </div>
        )
    }
}

export default LineChart;