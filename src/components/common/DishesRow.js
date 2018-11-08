import React from 'react';
import {View, Text} from 'react-native';

const TaxDetailRow = () => {

    return (
        <View style={{
            flexDirection: 'row',
        }}>
            <View style={{flex:1}}>
                <Text>
                    Tax 9.5%
                </Text>
            </View>
            <View style={{flex:1}}>
                <Text>
                    Sub total
                </Text>
                <Text>
                    29.5
                </Text>
            </View>
            <View style={{flex:1}}>
                <Text>
                    Tax
                </Text>
                <Text>
                    9.5
                </Text>
            </View>
            <View style={{flex:1}}>
                <Text>
                    Total
                </Text>
                <Text>
                    38.2
                </Text>
            </View>
        </View>
    )
}

export default TaxDetailRow;