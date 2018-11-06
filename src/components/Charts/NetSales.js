import React from 'react';
import {ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {getNetSales} from '../../Actions/InfoActions';
import ChartsComponent from '../common/ChartsComponent';

class NetSales extends React.Component {

    componentDidMount() {
        this.props.getNetSales(this.props.token)
    }

    renderContent() {

        let {loading, netSales} = this.props;
console.log(loading, netSales);
        if (loading) {
            return <ActivityIndicator />
        } else {
            return <ChartsComponent
                title={'Net sales'}
                sum={netSales.title}
                xAxis={netSales.xAxis}
                yAxis={netSales.yAxis}
            />
        }
    }

    render() {
        return this.renderContent()
    }
}

let mapStateToProps = ({auth, netSales}) => {

    return {
        token: auth.user.token,
        netSales: netSales.data,
        loading: netSales.loading
    }
}

export default connect(mapStateToProps,{getNetSales})(NetSales);