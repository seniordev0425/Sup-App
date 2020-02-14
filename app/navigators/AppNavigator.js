import React from 'react';
import { connect } from 'react-redux';
// import {createStackNavigator} from 'react-navigation-stack';
import {
    StackNavigator,
    addNavigationHelpers,
} from 'react-navigation';
import { BackHandler } from 'react-native'

import {addListener} from '../utils/redux'

import SplashScreen from '../screens/SplashScreen/index';
import LogInScreen from '../screens/LogInScreen/index';



export const AppNavigator = StackNavigator({
        splash: { screen: SplashScreen },
        login: { screen: LogInScreen }
    },{
        headerMode: 'none',
    }
);

class AppWithNavigationState extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // BackHandler.addEventListener('hardwareBackPress', function() {
        //     const { dispatch, navigation, nav } = this.props;

        //     console.log(nav)
        //     if(nav.index == 2) {
        //         BackHandler.exitApp();
        //     }

        //     dispatch({ type: 'Navigation/BACK' });
        //     return true;
        // }.bind(this));
    componentWillUnmount() {
        // BackHandler.removeEventListener('hardwareBackPress');
    }

    render() {
        return <AppNavigator navigation={addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.nav, addListener })} />
    }
}
const mapStateToProps = (state) => {
    return {
        nav: state.nav
    }
};

const A = connect(mapStateToProps)(AppWithNavigationState);
export default A;