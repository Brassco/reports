import React from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
// import { ProgressCircle } from 'react-native-svg-charts'
import ChartsComponent from '../common/ChartsComponent';
import ProgressCircleComponent from '../common/ProgressCircle';
import TableHeaderComponent from "../common/TableHeaderComponent";
import TableRowComponent from "../common/TableRowComponent";
import {connect} from 'react-redux';
import NetSales from './NetSales';
import Checks from './Checks';
import Guests from './Guests';

let {width, height} = Dimensions.get('window');

class Main extends React.Component {

    constructor(props) {
        super(props);
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
                        progress={0.23}
                    />
                    <TableHeaderComponent />
                    <TableRowComponent
                        name={'Comps'}
                        qty={25}
                        amount={125}
                    />
                    <TableRowComponent
                        name={'Discounts'}
                        qty={25}
                        amount={125}
                    />
                    <TableRowComponent
                        name={'Voids'}
                        qty={25}
                        amount={125}
                    />
                </ScrollView>
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