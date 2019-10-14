import * as React from 'react';


import { Button, View, Text, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: 0 }
  }

  componentDidMount(){
    // Toggle the state every second
    let myInterval = setInterval(() => {
      if (this.state.id >= 8) {
        clearInterval(myInterval);
        this.props.navigation.navigate('login')
      } else {
        this.setState({id: this.state.id+1});
      }
    }, 270)
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image style={styles.splashImage} source={require('../assets/imgs/splash.gif')} />    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: Dimensions.get('window').height,
  },
  
  splashImage: {
      width: '100%',
      height: '100%',
  }
});

export default SplashScreen;