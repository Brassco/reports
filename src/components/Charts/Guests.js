import React from 'react';
import {ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {getGuests} from '../../Actions/InfoActions';
import ChartsComponent from '../common/ChartsComponent';

class Guests extends React.Component {

    renderContent() {

        let {loading, guests} = this.props;
        if (loading) {
            return <ActivityIndicator />
        } else {
            let sum = guests.title || '';
            return <ChartsComponent
                title={'Guests'}
                sum={sum}
                xAxis={guests.xAxis}
                yAxis={guests.yAxis}
            />
        }
    }

    render() {
        return this.renderContent()
    }
}

let mapStateToProps = ({auth, guests}) => {
    return {
        token: auth.user.token,
        guests: guests.guests,
        loading: guests.loading
    }
}

export default connect(mapStateToProps,{getGuests})(Guests);