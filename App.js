// import React from 'react';
// import { Button, View, Text } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from './screens/SplashScreen';
import LogInScreen from './screens/LogInScreen';


const MainNavigator = createStackNavigator(
  {
    splash: {screen: SplashScreen},
    login : {screen: LogInScreen},
  },
  
  {
    headerMode: 'none'
  }
);

const App = createAppContainer(MainNavigator);

export default App;