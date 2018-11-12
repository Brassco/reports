import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {connect} from 'react-redux';
import TableHeaderComponent from "../common/TableHeaderComponent";
import TableRowComponent from "../common/TableRowComponent";
import {getTables} from '../../Actions/InfoActions';

class Tables extends React.Component {

//     componentDidMount() {
// console.log('Tables componentDidMount');
//         this.props.getTables(this.props.token)
//     }

    countTableAmount(tables) {
        let sum = 0;
        console.log(tables);
        for (let index in tables ) {
            let amount = tables[index].Amount || tables[index].AmountSum;
            console.log(tables[index].Amount);
            sum += parseFloat(amount);
        }
        console.log(sum);
        return sum;
    }

    renderContent() {
        if (!this.props.loading) {
            return (
                <View>
                    <TableHeaderComponent />
                    <TableRowComponent
                        name={'Comps'}
                        qty={this.props.tables['Comps'].length}
                        amount={this.countTableAmount(this.props.tables['Comps'])}
                        data={this.props.tables['Comps']}
                        openModal={this.props.openModal}
                    />
                    <TableRowComponent
                        name={'Discounts'}
                        qty={this.props.tables['Discounts'].length}
                        amount={this.countTableAmount(this.props.tables['Discounts'])}
                        data={this.props.tables['Discounts']}
                        openModal={this.props.openModal}
                    />
                    <TableRowComponent
                        name={'Voids'}
                        qty={this.props.tables['Voids'].length}
                        amount={this.countTableAmount(this.props.tables['Voids'])}
                        data={this.props.tables['Voids']}
                        openModal={this.props.openModal}
                    />
                    <TableRowComponent
                        name={'Cancellations'}
                        qty={this.props.tables['Cancellations'].length}
                        amount={this.countTableAmount(this.props.tables['Cancellations'])}
                        data={this.props.tables['Cancellations']}
                        openModal={this.props.openModal}
                    />
                    <TableRowComponent
                        name={'OpenTable'}
                        qty={this.props.tables['OpenTable'].length}
                        amount={this.countTableAmount(this.props.tables['OpenTable'])}
                        data={this.props.tables['OpenTable']}
                        openModal={this.props.openModal}
                    />
                </View>
            )
        } else {
            return <ActivityIndicator />
        }
    }

    render() {
        return (
            this.renderContent()
        )
    }
}

const mapStateToProps = ({auth, tables}) => {
console.log(tables)
    return {
        token: auth.user.token,
        tables: tables.tables,
        loading: tables.loading,
    }
}

export default connect(mapStateToProps, {getTables})(Tables);