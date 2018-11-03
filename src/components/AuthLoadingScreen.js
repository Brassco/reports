import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    View,
} from 'react-native';
import {connect} from 'react-redux';

class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        // const storeData = await AsyncStorage.multiGet(['@user', '@basket']);
        // if (storeData[0][1] !== null) {
        //     this.props.setUserFromStore(storeData[0][1]);
        //     if (storeData[1][1] !== null) {
        //         this.props.setBasketFromStore(storeData[1][1]);
        //     }
        // }
        // AsyncStorage.clear();
        this.props.navigation.navigate(/*storeData[0][1] !== null ? 'Main' : */'Login');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={{
                width: '100%',
                height: '100%',
            }}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps, {/*setUserFromStore, setBasketFromStore*/})(AuthLoadingScreen);