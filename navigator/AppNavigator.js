import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import {AsyncStorage} from 'react-native';

import LoginScreen from '../src/components/Auth/Login';
import AuthLoadingScreen from '../src/components/AuthLoadingScreen';
import MainComponent from '../src/components/Charts/Main';
// import Restaurants from '../components/Restaurants/Restaurants';
// import Details from '../components/Restaurants/Details';
// import Menu from '../components/Restaurants/Menu';
// import FeedbacksList from '../components/Feedbacks/FeedbacksList';
// import OrderComponent from '../components/Basket/OrderComponent';
// import DishesDetails from '../components/Restaurants/DishesDetails';

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

const RootNavigator = createStackNavigator({
    AuthLoading: { screen: AuthLoadingScreen },
    Login: { screen: LoginScreen },
    Main: { screen: MainComponent},
    // Restaurants: { screen: Restaurants},
    // Details: { screen: Details},
    // Menu: { screen: Menu},
    // Feedbacks: { screen: FeedbacksList},
    // Orders: { screen: OrderComponent},
    // DishesDetails: { screen: DishesDetails},
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };