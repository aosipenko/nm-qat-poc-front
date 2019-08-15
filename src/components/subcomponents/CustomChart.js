import React from 'react'

import '../style/Charts.css'

import {ResponsiveLine} from '@nivo/line'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

class StatisticsChart extends React.Component {

    render() {
        const chartData = [
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

        return (
            <div class="chart">
                <ResponsiveLine
                    isInteractive={false}
                    data={chartData}
                    margin={{top: 50, right: 110, bottom: 50, left: 60}}
                    xScale={{type: 'point'}}
                    yScale={{type: 'linear', stacked: false, min: '200', max: '400'}}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Sequence ID',
                        legendOffset: 40,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 45,
                        legend: 'RESPONSE TIME, MS',
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

export default StatisticsChart;