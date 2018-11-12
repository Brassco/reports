import React from 'react';
import {View, Text, Dimensions} from 'react-native';
// import { LineChart, Grid, PieChart } from 'react-native-svg-charts'
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import {connect} from 'react-redux';

let {width, height} = Dimensions.get('window');


const ChartsComponent = (props) => {
    let {title, sum, xAxis, yAxis} = props;
console.log(props);

    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10 }
    const xAxisHeight = 30
    return (
        <View style={{
            // width: width,
            alignSelf: 'stretch',
            backgroundColor: '#fff',
            height: height*0.25,
            // maxHeight: 300,
            borderRadius: 8,
            margin: 5
        }}>
            <View style={{
                // backgroundColor: '#157',
                height: 45,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                paddingLeft: 10,
                paddingRight: 10,
            }}>
                <Text>
                    {title}
                </Text>
                <Text>
                    {sum}
                </Text>
            </View>
            <View style={{ height: 150, padding: 10, flexDirection: 'row' }}>
                <View style={{ flex: 1}}>
                    <LineChart
                        style={{ flex: 1 }}
                        data={yAxis[0]}
                        contentInset={verticalContentInset}
                        svg={{ stroke: '#2199d8' }}
                    >

                    </LineChart>
                    <XAxis
                        style={{
                            borderTopWidth:1,
                            borderTopColor:'#f1f1f1',
                            marginHorizontal: 0,
                            height: xAxisHeight
                        }}
                        data={xAxis}
                        formatLabel={(value, index) => value }
                        xAccessor={({ index }) => index}
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                    />
                </View>
            </View>
        </View>
    )

    // Layout of an x-axis together with a y-axis is a problem that stems from flexbox.
    // All react-native-svg-charts components support full flexbox and therefore all
    // layout problems should be approached with the mindset "how would I layout regular Views with flex in this way".
    // In order for us to align the axes correctly we must know the height of the x-axis or the width of the x-axis
    // and then displace the other axis with just as many pixels. Simple but manual.

    /*return (
        <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
            <View style={{ flex: 1, marginLeft: 10 }}>
                <LineChart
                    style={{ flex: 1 }}
                    data={data}
                    contentInset={verticalContentInset}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                >

                </LineChart>
                <XAxis
                    style={{ marginHorizontal: -10, height: xAxisHeight }}
                    data={xData}
                    formatLabel={(value, index) => index}
                    contentInset={{ left: 10, right: 10 }}
                    svg={axesSvg}
                />
            </View>
        </View>
    )*/
}

export default ChartsComponent;