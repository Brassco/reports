import React from 'react';
import {View, Text, Dimensions, ScrollView,
    TouchableOpacity, RefreshControl} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import ModalTicket from '../common/ModalTicket';
import ModalOpenTableTicket from '../common/ModalOpenTableTicket';
import ProgressCircleComponent from '../common/ProgressCircle';
import Header from '../common/Header';
import Modal from 'react-native-modalbox';
import {connect} from 'react-redux';
import NetSales from './NetSales';
import Checks from './Checks';
import Guests from './Guests';
import Tables from "./Tabels";
import {getData, getNetSales, getLabor, getTables, getChecks, getGuests} from '../../Actions/InfoActions';

let {width, height} = Dimensions.get('window');

class Main extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            modalData: false,
            modalType: null
        }
        this.scroll = null;
        this.onOpenModal = this.onOpenModal.bind(this);
        this.getData = this.getData.bind(this);
        this.onOpenTable = this.onOpenTable.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        let {token} = this.props;
        this.props.getNetSales(token);
        this.props.getLabor(token);
        this.props.getTables(token);
        this.props.getChecks(token);
        this.props.getGuests(token);
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

    onOpenTable() {
        console.log('onOpenTable');
        this.scroll.scrollToEnd(); // will scroll to the top at y-position 0
    }

    render() {
        let {navigation, name} = this.props;
        return (
            <View style={{flex: 1}}>
                <Header
                    navigation={navigation}
                    title={name}
                />
                <View style={{
                    width: '100%',
                    height: height-70,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                    backgroundColor: '#EDEDED'
                }}>
                    <ScrollView
                        ref={(scroll) => {this.scroll = scroll;}}
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
                                onOpenTable={this.onOpenTable}
                                openModal={this.onOpenModal}
                            />
                    </ScrollView>
                    <Modal
                        style={{
                            justifyContent: 'flex-start',
                            alignItems: 'stretch',
                            height: height*0.8,
                            maxHeight: 450,
                            width: width*0.8,
                            maxWidth: 400,
                            backgroundColor: "#fff",
                            // padding: 15
                        }}
                        backdropOpacity={0.75}
                        ref={"modal1"}
                        swipeToClose={false}
                        backdropPressToClose={false}
                        isOpen={this.state.isOpen}
                        onClosed={() => console.log(this.state.isOpen)}
                    >
                        <View style={{
                            height: 40,
                            width: width*0.75,
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
                                    // margin: 5,
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
            </View>
        )
    }
}

const mapStateToProps = ({auth}) => {
    return {
        token: auth.user.token,
        name: auth.name
    }
}

export default connect(mapStateToProps, {getNetSales, getLabor, getTables, getChecks, getGuests})(Main);