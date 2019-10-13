import * as React from 'react';
import { Button, View, Text, Image, ImageBackground, Animated, Easing } from 'react-native';
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

class LogInScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {yPosition: new Animated.Value(height/2 + 50)};

    }
    
    
    componentDidMount () {

        // Animated.timing(this.state.yPosition, {
        //     toValue: 200,
        //     easing: Easing.ease,
        //     duration: 300,
        // }).start();


        Animated.sequence([
            // decay, then spring to start and twirl
            Animated.timing(this.state.yPosition, {
                toValue: 200,
                easing: Easing.ease,
                duration: 300,
            }),
            Animated.timing(this.state.yPosition, {
                toValue: 250,
                easing: Easing.ease,
                duration: 100,
            }),
            Animated.timing(this.state.yPosition, {
                toValue: 200,
                easing: Easing.ease,
                duration: 60,
            }),
          ]).start(); 
    }

    render() {
      return (
        <View style={{width: '100%', height: '100%'}}>
            <View>
                <Text>It is LogInScreens</Text>
            </View>
            <Animated.View style={{position: 'absolute', top: this.state.yPosition, left: 0, right: 0, bottom: 0,  alignItems: 'center'}}>
                <Image style={{width: 175, height: 136}} source={require('../assets/imgs/login.png')} />
            </Animated.View>
            
            
        </View>
      );
    }
}
export default LogInScreen;