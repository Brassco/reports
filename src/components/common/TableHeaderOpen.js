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
            // marginLeft: 10,
            // marginRight: 10,
            justifyContent: 'center',
        }}>
            <View style={{
                height: 50,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                paddingTop: 8,
                borderBottomWidth: 1,
                borderBottomColor: '#f1f1f1',
            }}>
                <View style={{
                    flex: 4,
                    // backgroundColor: '#729',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}>
                    <Text style={styles.titlesText}>
                        {type == 'OpenTable' ? 'Table' : 'Name'}
                    </Text>
                </View>
                <View style={{
                    flex: 2,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}>
                    <Text style={styles.titlesText}>
                        Amount
                    </Text>
                    <Text style={styles.titlesText}>
                        ($)
                    </Text>
                </View>
                <View
                    style={{
                        flex: 2,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={styles.titlesText}>
                        Time
                    </Text>
                </View>
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

let styles = {
    titlesText: {
        color: '#999999',
        fontSize: 12
    }
}

export default TableHeaderOpen;