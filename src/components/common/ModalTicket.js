import React from 'react';
import {View, Text} from 'react-native';
import ModalTiketRow from "./ModalTiketRow";

const ModalTicket = (props) => {

    let {modalData} = props;
    return (
        <View>
            <ModalTiketRow
                name={'Name'}
                value={modalData.Name}
            />
            <ModalTiketRow
                name={'Quantity'}
                value={modalData.Quantity}
            />
            <ModalTiketRow
                name={'Ticket'}
                value={modalData.Ticket}
            />
            <ModalTiketRow
                name={'Server'}
                value={modalData.Server}
            />
            <ModalTiketRow
                name={'date'}
                value={modalData.date}
            />
            <ModalTiketRow
                name={'Amount'}
                value={modalData.Amount}
            />
            <ModalTiketRow
                name={'Time'}
                value={modalData.Time}
            />
            <ModalTiketRow
                name={'Shift'}
                value={modalData.Shift}
            />
            <ModalTiketRow
                name={'Table'}
                value={modalData.Table}
            />
            <ModalTiketRow
                name={'Guest'}
                value={modalData.Guest}
            />
            <ModalTiketRow
                name={'Key'}
                value={modalData.Key}
            />
            <ModalTiketRow
                name={'Type'}
                value={modalData.Type}
            />
        </View>
    )
}

export default ModalTicket;