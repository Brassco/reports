import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import TaxDetailRow from "./TaxDetailRow";
import DishesRow from "./DishesRow";

class ModalTicket extends React.Component{


    renderDishes() {
        console.log('renderDishes', this.props.modalData.Dishes);
        return this.props.modalData.Dishes.map( dishes => {
            console.log(dishes);
            return (
                <DishesRow
                    key={dishes.name}
                    data={dishes}
                />
            )
        })
    }

    render() {
        let {modalData} = this.props;
        let {titleText, container, titleContainer} = styles;
        let addressStr = modalData.Address.split('<br>');
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={titleText}>
                        {modalData.Name}
                    </Text>
                    <Text>
                        {addressStr[0]}
                    </Text>
                    <Text>
                        {addressStr[1]}
                    </Text>
                </View>
                <View style={{
                    // backgroundColor: '#759'
                }}>
                    <Text style={titleText}>
                        TABLE {modalData.Table}
                    </Text>
                    <Text>
                        {modalData.Guest} Guests {modalData.Server}
                    </Text>
                </View>
                <ScrollView style={{
                    maxHeight: 80,
                    // backgroundColor: '#789',
                    alignSelf: 'stretch'
                }}>
                    {
                        this.renderDishes()
                    }
                </ScrollView>
                <View style={{
                    alignSelf: 'stretch',
                    borderBottomWidth: 1,
                    borderBottomColor: '#343434'
                }}>
                    <View style={{
                        borderBottomWidth: 1,
                        borderBottomColor: '#343434'
                    }}>
                        <Text>
                            Tax Details
                        </Text>
                    </View>
                    <View >
                        <TaxDetailRow data={modalData.TaxDetails}/>
                    </View>
                </View>
                <View style={{
                    alignSelf: 'stretch',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={[
                        titleText,
                        {fontSize: 15}
                    ]}>
                        Total
                    </Text>
                    <Text style={[
                        titleText,
                        {fontSize: 16}
                    ]}>
                        {modalData.AmountSum}
                    </Text>
                </View>
                <View>
                    <Text>
                        {modalData.TicketDate} - BILL
                    </Text>
                </View>
                <View>
                    <Text style={[
                        titleText,
                        {fontSize: 15}
                    ]}>
                        Thank You for using {modalData.Name}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = {
    titleText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1f1f1f'
    },
    dishesRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        // width: '100%',
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        // backgroundColor: '#729',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignSelf: 'stretch'
    },
    titleContainer: {
        // height: 50,
        alignSelf: 'stretch',
        // backgroundColor: '#729',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
}

export default ModalTicket;