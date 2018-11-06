import React from 'react';
import {ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {getGuests} from '../../Actions/InfoActions';
import ChartsComponent from '../common/ChartsComponent';

class Guests extends React.Component {

    componentDidMount() {
console.log('Guests componentDidMount');
        this.props.getGuests(this.props.token)
    }

    renderContent() {

        let {loading, guests} = this.props;
console.log(loading, guests);
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
console.log(guests);
    return {
        token: auth.user.token,
        guests: guests.guests,
        loading: guests.loading
    }
}

export default connect(mapStateToProps,{getGuests})(Guests);