import * as React from 'react';


import { Button, View, Text, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import images from '../../themes/images';

var id = 0;

const {width, height} = Dimensions.get('window');
class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    setTimeout(() => {
      this.props.navigation.navigate('login');
    }, 2500);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image style={styles.splashImage} source={images.splashBackground} />    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      width: width,
      height: height,
      backgroundColor: 'white'
  },
  
  splashImage: {
      width: width,
      height: height-30,
      marginTop: 10,
      resizeMode: 'stretch'
  }
});

export default SplashScreen;