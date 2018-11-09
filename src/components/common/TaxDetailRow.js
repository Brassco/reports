import React from 'react';
import {View, Text} from 'react-native';

const TaxDetailRow = ({data}) => {

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <View style={{
                flex:1,
                justifyContent: 'flex-end'
            }}>
                <Text>
                    Tax {data.tauxTVA}%
                </Text>
            </View>
            <View style={{
                alignItems: 'center',
                flex:1
            }}>
                <Text>
                    Sub total
                </Text>
                <Text>
                    {data.subTotal}
                </Text>
            </View>
            <View style={{
                alignItems: 'flex-end',
                flex:1
            }}>
                <Text>
                    Tax
                </Text>
                <Text>
                    {data.tax}
                </Text>
            </View>
            <View style={{
                alignItems: 'flex-end',
                flex:1,
            }}>
                <Text>
                    Total
                </Text>
                <Text>
                    {data.total}
                </Text>
            </View>
        </View>
    )
}

export default TaxDetailRow;