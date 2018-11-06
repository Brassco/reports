import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';

let {width, height} = Dimensions.get('window');


class TableRowComponent extends React.Component{
    render() {

        let {amount, qty, name} = this.props;

        return (
            <View style={{
                // width: width,
                alignSelf: 'stretch',
                backgroundColor: '#fff',
                margin: 1,
                marginLeft: 10,
                marginRight: 10,
                paddingLeft: 20,
                paddingRight: 20,
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
                            {name}
                        </Text>
                    </View>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text>
                            {qty}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}
                        // onPress={this.setState({
                        //     isOpen: true
                        // })}
                    >
                        <Text>
                            {amount}
                        </Text>
                        <Text>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    alignSelf: 'stretch',
                    backgroundColor: '#fff',
                    height: 50,
                }}>

                </View>
            </View>
        )
    }
}

export default TableRowComponent;