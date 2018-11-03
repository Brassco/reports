import React from 'react';
import {View, Text, TextInput, Dimensions,
    SafeAreaView, ScrollView, TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import {connect} from 'react-redux';
import {changeName, changePassword, onLogin} from '../../Actions/AuthActions';

let {width, height} = Dimensions.get('window');

class Login extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super()
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onLogin = this.onLogin.bind(this)
    }

    onChangeName = (name) => {
        this.props.changeName(name);
    }

    onChangePassword = (pass) => {
        this.props.changePassword(pass);
    }

    onLogin = () => {
        let {name, password} = this.props;

        console.log('onLogin', name, password);
        this.props.onLogin(name, password, this.goToMain);
    }

    goToMain = () => {
        this.props.navigation.navigate('Main')
    }

    renderButton = () => {
        let {buttonContainer} = styles;
        if (this.props.loading) {
            return (
                <View style={[
                    buttonContainer,
                    {
                        alignItems: 'center',
                    }
                ]}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <View style={buttonContainer}>
                <TouchableOpacity style={{
                        backgroundColor: '#159',
                        width: 80,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={this.onLogin}
                >
                    <Text>
                        Log me in
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        let {
            container, formContainer, logoContainer,
            textInputStyle, inputWrapper
        } = styles;
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={container}>
                        <View style={[
                            container,
                            logoContainer
                        ]}>
                            <Text>
                                LOGO
                            </Text>
                        </View>
                        <View style={[
                            container,
                            formContainer
                        ]}>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                width: width*0.8,
                                height: height*0.4,
                                padding: 20,
                                backgroundColor: '#f1f1f1'
                            }}>
                                <View>
                                    <Text style={{
                                        fontSize: 25,
                                        color: '#c5c5c5'
                                    }}>
                                        LOGIN
                                    </Text>
                                </View>
                                {
                                    this.props.error &&
                                    <View style={{
                                            alignItems: 'center'
                                        }}>
                                        <Text style={{
                                            fontSize: 18,
                                            color: '#db0911'
                                        }}>
                                            {this.props.error}
                                        </Text>
                                    </View>
                                }
                                <View style={inputWrapper}>
                                    <TextInput
                                        style={textInputStyle}
                                        placeholder={'Name'}
                                        onChangeText={this.onChangeName}
                                        value={this.props.name}
                                    />
                                </View>
                                <View style={inputWrapper}>
                                    <TextInput
                                        style={textInputStyle}
                                        placeholder={'Password'}
                                        onChangeText={this.onChangePassword}
                                        value={this.props.password}
                                    />
                                </View>

                                {
                                    this.renderButton()
                                }

                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = {
    container: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a85d3'
    },
    logoContainer: {
        height: height*0.4,
        // backgroundColor: '#559',
    },
    formContainer: {
        height: height*0.6,
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    textInputStyle: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderRadius: 2,
        paddingLeft: 20,
        borderColor: '#1f1f1f',
        backgroundColor: '#f6f0af'
    },
    inputWrapper: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'flex-end',
    }
}

const mapStateToProps = ({auth}) => {
    return {
        name: auth.name,
        password: auth.password,
        error: auth.error,
        loading: auth.loading,
    }
}

export default connect(mapStateToProps, {changeName, changePassword, onLogin})(Login);