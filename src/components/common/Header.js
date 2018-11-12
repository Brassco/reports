import React, {Component} from 'react';
import {View, Text, AsyncStorage, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions, DrawerActions} from 'react-navigation';
import {onLogOut} from '../../Actions/AuthActions';

class Header extends Component {

    onLogout() {
        // this.props.onLogOut()
        AsyncStorage.clear();
        this.goToLogin();
    }


    goToLogin = () => {
        this.props.navigation.navigate('Login')
    }

    render() {
        let {container, imageContainer,
            titleContainer,
        } = styles;
        let {title, burger} = this.props;

        return (
            <View style={container}>
                <TouchableWithoutFeedback
                    onPress={
                        this.onLogout.bind(this)
                    }
                >
                    <View style={imageContainer}>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: '300',
                            color: '#fff'
                        }}>
                            LogOut
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={titleContainer}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: '300',
                        color: '#fff'
                    }}>
                        {title}
                    </Text>
                </View>
                <View style={imageContainer}>

                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        height: 50,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#368ee0'
    },
    imageContainer: {
        // width: 70,
        // height: 50,
        flex: 2,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#159'
    },
    titleContainer: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,

    },
    headerImageContainer: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        // backgroundColor: '#716'
    },
    basketImage: {
        width: 25,
        height: 25
    },
    basketImageContainer: {
        position: 'absolute',
        right: 6,
        top: 15,
    },
    basketContainer: {
        position: 'absolute',
        right: 0,
        top: 12,
    }
}

const mapStateToProps = () => {
    return {
    }
}
export default connect(mapStateToProps, {onLogOut})(Header);