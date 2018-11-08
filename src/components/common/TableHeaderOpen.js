import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

let {width, height} = Dimensions.get('window');


const TableHeaderOpen = (props) => {

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
                    flex: 4,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                    <Text>
                        Name
                    </Text>
                </View>
                <View style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                    <Text>
                        Amount
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        flex: 2,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                    onPress={() => openModal(data, type)}
                >
                    <Text>
                        Time
                    </Text>
                </TouchableOpacity>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                </View>
            </View>
        </View>
    )
}

export default TableHeaderOpen;