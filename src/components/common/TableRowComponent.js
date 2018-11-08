import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import TableRowOpen from './TableRowOpen';
import TableHeaderOpen from './TableHeaderOpen';
import FontAwesome, { Icons } from 'react-native-fontawesome';

let {width, height} = Dimensions.get('window');


class TableRowComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    renderOpenTable() {
        if( this.state.isOpen) {
            return (
                <View style={{
                    alignSelf: 'stretch',
                    backgroundColor: '#fff',
                    height: this.state.isOpen ? (this.props.data.length + 1)* 55 : 0,
                }}>
                    <TableHeaderOpen />
                    {
                        this.renderRows()
                    }
                </View>
            )
        }
    }

    renderRows() {
        console.log('renderRows', this.props);
        if( this.state.isOpen) {
            return (this.props.data.map( (row, index) => {
                return (
                    <TableRowOpen
                        key={this.props.name+index+row.Ticket}
                        data={row}
                        type={this.props.name}
                        openModal={this.props.openModal}
                    />
                )
            }))
        }
    }

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
                        onPress={() => this.setState({
                                isOpen: !this.state.isOpen
                            })
                        }
                    >
                        <Text>
                            {amount}
                        </Text>
                        <Text style={{margin: 10, fontSize: 13, textAlign: 'left'}}>
                            <FontAwesome>{Icons.caretDown}</FontAwesome>
                        </Text>
                    </TouchableOpacity>
                </View>

                    {
                        this.renderOpenTable()
                    }

            </View>
        )
    }
}

export default TableRowComponent;