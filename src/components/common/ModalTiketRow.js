import React from 'react';
import {View, Text, Dimensions} from 'react-native';

let {width, height} = Dimensions.get('window');

const ModalTiketRow = (props) => {
    return (
        <View style={{
            width: width*0.75,
            maxWidth: 380,
            // height: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderBottomWidth: 1,
            borderBottomColor: '#f1f1f1',
            // backgroundColor: '#138'
        }}>
            <Text>{props.name}</Text>
            <Text>{props.value}</Text>
        </View>
    )
}

export default ModalTiketRow;