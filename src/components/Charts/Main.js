import React from 'react';
import {View, Text, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import ModalTicket from '../common/ModalTicket';
import ProgressCircleComponent from '../common/ProgressCircle';
import Modal from 'react-native-modalbox';
import {connect} from 'react-redux';
import NetSales from './NetSales';
import Checks from './Checks';
import Guests from './Guests';
import Tables from "./Tabels";

let {width, height} = Dimensions.get('window');

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            modalData: false,
            modalType: null
        }
        this.onOpenModal = this.onOpenModal.bind(this);
    }

    onOpenModal(data, type) {
        console.log('open modal data - ', data, type)
        this.setState({
            isOpen: true,
            modalData: data,
            modalType: type
        })
    }

    renderModalContent() {
console.log('renderModalContent', this.state.modalData, this.state.modalType);

        if( this.state.modalData) {

            let {modalData} = this.state;
            if (this.state.modalType !== 'OpenTable') {
                return (
                    <ModalTicket
                        modalData={modalData}
                    />
                )
            } else {
                return (
                    <ModalTicket
                        modalData={modalData}
                    />
                )
            }
        }
    }

    render() {
        return (
            <View style={{
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                backgroundColor: '#dcdcdc'
            }}>
                <ScrollView style={{
                    padding: 10,
                    width: width,
                }}>
                    <NetSales />
                    <Checks />
                    <Guests />

                    <ProgressCircleComponent
                        progress={6.8}
                    />
                    <Tables
                        openModal={this.onOpenModal}
                    />
                </ScrollView>
                <Modal
                    style={{
                        // flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',

                        height: height*0.5,
                        maxHeight: 400,
                        width: width*0.8,
                        maxWidth: 400,
                        backgroundColor: "#fff"
                    }}
                    ref={"modal1"}
                    swipeToClose={false}
                    isOpen={this.state.isOpen}
                    onClosed={() => console.log(this.state.isOpen)}
                >
                    <View style={{
                        height: 40,
                        width: width*0.8,
                        maxWidth: 400,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-end'
                    }}>
                        <TouchableOpacity
                            onPress={() => this.setState({isOpen: !this.state.isOpen})}
                            style={{
                                // backgroundColor: '#159',
                                width: 50,
                                height: 40,
                            }}>
                            <Text style={{
                                margin: 5,
                                fontSize: 35,
                                textAlign: 'center'}}>
                                <FontAwesome>{Icons.close}</FontAwesome>
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {
                            this.renderModalContent()
                        }
                    </View>
                </Modal>
            </View>
        )
    }
}

const mapStateToProps = ({auth}) => {
console.log(auth);
    return {
        token: auth.user.token
    }
}

export default connect(mapStateToProps)(Main);