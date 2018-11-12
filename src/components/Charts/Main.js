import React from 'react';
import {View, Text, Dimensions, ScrollView,
    TouchableOpacity, RefreshControl} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import ModalTicket from '../common/ModalTicket';
import ModalOpenTableTicket from '../common/ModalOpenTableTicket';
import ProgressCircleComponent from '../common/ProgressCircle';
import Modal from 'react-native-modalbox';
import {connect} from 'react-redux';
import NetSales from './NetSales';
import Checks from './Checks';
import Guests from './Guests';
import Tables from "./Tabels";
import {getData} from '../../Actions/InfoActions';

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
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        console.log('getDATA', this.props);
        let {token} = this.props;
        this.props.getData(token)
    }

    onOpenModal(data, type) {
        this.setState({
            isOpen: true,
            modalData: data,
            modalType: type
        })
    }

    renderModalContent() {
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
                    <ModalOpenTableTicket
                        modalData={modalData}
                    />
                )
            }
        }
    }

    render() {
        return (
            <View style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                backgroundColor: '#dcdcdc'
            }}>
                <ScrollView
                    style={{
                        width: '100%',
                    }}
                    bounces={true}
                    horizontal={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={false}
                            // onRefresh={() => console.log('on refresh')}
                            onRefresh={this.getData}
                        />
                    }
                >
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
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        height: height*0.8,
                        maxHeight: 450,
                        width: width*0.8,
                        maxWidth: 400,
                        backgroundColor: "#fff"
                    }}
                    ref={"modal1"}
                    swipeToClose={false}
                    backdropPressToClose={false}
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
                    <View style={{ flex: 1}}>
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

export default connect(mapStateToProps, {getData})(Main);