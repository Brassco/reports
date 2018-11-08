import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

let {width, height} = Dimensions.get('window');


const TableRowOpen = (props) => {

    let {data, openModal, type} = props;
    return (
        <View style={{
            // width: width,
            alignSelf: 'stretch',
            backgroundColor: '#fff',
            margin: 1,
            marginLeft: 10,
            marginRight: 10,
            justifyContent: 'center',
        }}>
            <View style={{
                height: 50,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#f1f1f1',
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                    <Text>
                        {data.Name}
                    </Text>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text>
                        {data.Amount}
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                    onPress={() => openModal(data, type)}
                >
                    <Text>
                        {data.Time}
                    </Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
                        <FontAwesome>{Icons.search}</FontAwesome>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TableRowOpen;