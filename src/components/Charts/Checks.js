import React from 'react';
import {ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {getChecks} from '../../Actions/InfoActions';
import ChartsComponent from '../common/ChartsComponent';

class Checks extends React.Component {

    renderContent() {

        let {loading, checks} = this.props;
console.log(loading, checks);
        if (loading) {
            return <ActivityIndicator />
        } else {
            let title = checks.title || '';
            return <ChartsComponent
                title={'Checks'}
                sum={title}
                xAxis={checks.xAxis}
                yAxis={checks.yAxis}
            />
        }
    }

    render() {
        return this.renderContent()
    }
}

let mapStateToProps = ({auth, checks}) => {
console.log(checks);
    return {
        token: auth.user.token,
        checks: checks.checks,
        loading: checks.loading
    }
}

export default connect(mapStateToProps,{getChecks})(Checks);