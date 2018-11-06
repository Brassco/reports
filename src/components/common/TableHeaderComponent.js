import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import { LineChart, Grid, PieChart } from 'react-native-svg-charts'
let {width, height} = Dimensions.get('window');


const TableHeaderComponent = (props) => {
    return (
        <View style={{
            // width: width,
            alignSelf: 'stretch',
            backgroundColor: '#fff',
            height: 50,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            marginLeft: 10,
            marginRight: 10,
            paddingLeft: 20,
            paddingRight: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-start',
            }}>
                <Text>
                    Name
                </Text>
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text>
                    Qty
                </Text>
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
            }}>
                <Text>
                    Amount($)
                </Text>
            </View>
        </View>
    )
}

export default TableHeaderComponent;