import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts'
import {connect} from 'react-redux';
import {getLabor} from '../../Actions/InfoActions';

let {width, height} = Dimensions.get('window');

class ProgressCircleComponent extends React.Component {

    render() {
        let {labor} = this.props;
        const MAX_PERCENT_VALUE = 60;
        let value = (labor/(MAX_PERCENT_VALUE/ 100))

        return (
            <View style={{
                alignSelf: 'stretch',
                height: height * 0.3,
                maxHeight: 300,
                padding: 10,
                backgroundColor: '#fff',
                borderRadius: 8,
                marginTop: 5,
                margin: 10
            }}>
                <View>
                    <Text>
                        Labor/Sales
                    </Text>
                </View>
                <ProgressCircle
                    strokeWidth={42}
                    cornerRadius={0}
                    startAngle={-Math.PI * 0.5}
                    endAngle={Math.PI * 0.5}
                    style={{
                        height: height * 0.3,
                        maxHeight: 300,
                    }}
                    progress={value*0.01}
                    progressColor={'#137a19'}
                >
                    <View style={{
                        height: 50,
                        flexDirection: "column",
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        paddingTop: 50
                        // backgroundColor: '#125',
                    }}>
                        <View style={{
                            flex: 1,
                            width: '100%',
                            alignItems: 'center'
                        }}>
                            <View>
                                <Text>
                                    %
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            flex: 2,
                            width: '100%',
                            alignItems: 'center',
                            // backgroundColor: '#726'
                        }}>
                            <View>
                                <Text style={{
                                    fontSize: 40
                                }}>
                                    {labor}
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            flex: 4,
                            flexDirection: 'row',
                            width: '100%',
                            alignItems: 'flex-start'
                        }}>
                            <View style={{
                                flex: 1,
                                // backgroundColor: '#125',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 15
                                }}>
                                    0
                                </Text>
                            </View>
                            <View style={{
                                flex: 1,
                                // backgroundColor: '#725',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 15
                                }}>
                                    60
                                </Text>
                            </View>
                        </View>
                    </View>
                </ProgressCircle>
            </View>
        )
    }
}

const mapStateToProps = ({auth, labor}) => {
    return {
        token: auth.user.token,
        labor: labor.labor,
        loading: labor.loading,
    }
}

export default connect(mapStateToProps, {getLabor})(ProgressCircleComponent);