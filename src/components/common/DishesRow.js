import React from 'react';
import {View, Text} from 'react-native';

const DishesRow = (props) => {

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Text>
                {props.data.qty}
            </Text>
            <Text>
                {props.data.name}
            </Text>
            <Text>
                {props.data.amount}
            </Text>
        </View>
    )
}

export default DishesRow;