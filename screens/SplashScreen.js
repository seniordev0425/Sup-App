import * as React from 'react';
import splash1 from '../assets/imgs/splash1.png';
import splash2 from '../assets/imgs/splash2.png';
import splash3 from '../assets/imgs/splash3.png';
import splash4 from '../assets/imgs/splash4.png';
import splash5 from '../assets/imgs/splash5.png';
import splash6 from '../assets/imgs/splash6.png';
import splash7 from '../assets/imgs/splash7.png';
import splash8 from '../assets/imgs/splash8.png';
import splash9 from '../assets/imgs/splash9.png';
import splash10 from '../assets/imgs/splash10.png';

import { Button, View, Text, Image, ImageBackground } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const splashImgs = [splash1, splash2, splash3, splash4, splash5, splash6, splash7, splash8, splash9, splash10];

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: 0 }
  }

  componentDidMount(){
    // Toggle the state every second
    let myInterval = setInterval(() => {
      if (this.state.id >= 9) {
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
      <View style={{width: '100%', height: '100%'}}>
          <Image style={{width: '100%', height: '100%'}} source={require('../assets/imgs/splash.gif')} />
          
      </View>
    );
  }
}
  export default SplashScreen;