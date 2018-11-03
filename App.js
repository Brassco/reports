import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    ActivityIndicator,
    BackHandler
} from 'react-native';
import reducers from './src/Reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import { NavigationActions } from "react-navigation";

import { AppNavigator, middleware } from './navigator/AppNavigator';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default class App extends Component<{}> {

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {

        const state = store.getState();
        const navigationState = state.navigation;   // < the name of your reducer
        let routs = ['Login', 'Main']
        if(state.nav.routes.length > 2 && !routs.includes(state.nav.routes[state.nav.routes.length-1].routeName)) {
            store.dispatch(NavigationActions.back());
            return true;  // will not exit, just go back
        }
        else {
            return false;   // will exit
        }
    };

    render() {
        return (
            <Provider store={store}>
              <AppNavigator/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});