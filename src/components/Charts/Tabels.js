import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {connect} from 'react-redux';
import TableHeaderComponent from "../common/TableHeaderComponent";
import TableRowComponent from "../common/TableRowComponent";
import {getTables} from '../../Actions/InfoActions';

class Tables extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openTableIndex: null
        }
        this.openTable = this.openTable.bind(this);
    }

    openTable(index) {
        if (this.state.openTableIndex == index) {
            this.setState({
                openTableIndex: null
            })
        } else {
            this.setState({
                openTableIndex: index
            })
        }
        this.props.onOpenTable();
    }

    countTableAmount(tables) {
        let sum = 0;
        for (let index in tables ) {
            let amount = tables[index].Amount || tables[index].AmountSum;
            sum += parseFloat(amount);
        }
        return sum;
    }

    renderContent() {
        console.log('renderContent TABLES', this.props.tables)
        if (!this.props.loading) {
            // if (this.state.openTableIndex != null) {
            //     console.log('must scroll')
            //     this.props.onOpenTable()
            // }
            let {Totals} = this.props.tables;
            return (
                <View>
                    <TableHeaderComponent />
                    <TableRowComponent
                        name={'Comps'}
                        qty={Totals[1].Qty}
                        amount={Totals[1].Amount}
                        data={this.props.tables['Comps']}
                        openModal={this.props.openModal}
                        index={0}
                        isOpen={this.state.openTableIndex == 0}
                        openTable={() => this.openTable(0)}
                    />
                    <TableRowComponent
                        name={'Discounts'}
                        qty={Totals[4].Qty}
                        amount={Totals[4].Amount}
                        data={this.props.tables['Discounts']}
                        openModal={this.props.openModal}
                        index={1}
                        isOpen={this.state.openTableIndex == 1}
                        openTable={() => this.openTable(1)}
                    />
                    <TableRowComponent
                        name={'Voids'}
                        qty={Totals[3].Qty}
                        amount={Totals[3].Amount}
                        data={this.props.tables['Voids']}
                        openModal={this.props.openModal}
                        index={2}
                        isOpen={this.state.openTableIndex == 2}
                        openTable={() => this.openTable(2)}
                    />
                    <TableRowComponent
                        name={'Cancellations'}
                        qty={Totals[2].Qty}
                        amount={Totals[2].Amount}
                        data={this.props.tables['Cancellations']}
                        openModal={this.props.openModal}
                        index={3}
                        isOpen={this.state.openTableIndex == 3}
                        openTable={() => this.openTable(3)}
                    />
                    <TableRowComponent
                        name={'OpenTable'}
                        qty={Totals[0].Qty}
                        amount={Totals[0].Amount}
                        data={this.props.tables['OpenTable']}
                        openModal={this.props.openModal}
                        index={4}
                        isOpen={this.state.openTableIndex == 4}
                        openTable={() => this.openTable(4)}
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

    return {
        token: auth.user.token,
        tables: tables.tables,
        loading: tables.loading,
    }
}

export default connect(mapStateToProps, {getTables})(Tables);