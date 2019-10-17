import * as React from 'react';


import { Button, View, Text, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import images from '../../themes/images';

var id = 0;
class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // Toggle the state every second
    id = 0;
    let myInterval = setInterval(() => {
      if (id >= 8) {
        clearInterval(myInterval);
        this.props.navigation.navigate('login')
      } else {
        id ++;
      }
    }, 270)
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
      width: '100%',
      height: Dimensions.get('window').height,
  },
  
  splashImage: {
      width: '100%',
      height: '100%',
  }
});

export default SplashScreen;