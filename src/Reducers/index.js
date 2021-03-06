import {combineReducers} from 'redux';
import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../../navigator/AppNavigator';
import AuthReducer from './AuthReducer';
import GuestsReducer from './GuestsReducer';
import ChecksReducer from './ChecksReducer';
import NetSalesReducer from './NetSalesReducer';
import TablesReducer from './TablesReducer';
import LaborReducer from './LaborReducer';

const firstAction = RootNavigator.router.getActionForPathAndParams('AuthLoading');
const initialNavState = RootNavigator.router.getStateForAction(
    firstAction,
);

function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        case 'Register':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Register' }),
                state
            );
            break;
        case 'Login':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Main' }),
                state
            );
            break;
        case 'Logout':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Login' }),
                state
            );
            break;
        case 'Restaurants':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Restaurants' }),
                state
            );
            break;
        case 'RestaurantInfo':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Details' }),
                state
            );
            break;
        case 'Menu':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Menu' }),
                state
            );
            break;
        case 'Feedbacks':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Feedbacks' }),
                state
            );
            break;
        case 'Orders':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Orders' }),
                state
            );
            break;
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

export default combineReducers({
    auth: AuthReducer,
    checks: ChecksReducer,
    netSales: NetSalesReducer,
    guests: GuestsReducer,
    tables: TablesReducer,
    labor: LaborReducer,
    nav: nav,
})