import * as React from 'react';
import { TouchableOpacity, Button, View, Text, Image, ImageBackground, Animated, Easing, Dimensions, BackHandler } from 'react-native';
// import { , TouchableHighlight, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { connect } from "react-redux";

import images from '../../themes/images';
import styles from './styles';

import SignIn from '../../components/SignIn/index';
import Step1 from '../../components/SignUp/step1/index';



const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

const logo_imgs = [images.logo_purple_blue_green, images.logo_green_purple_blue, images.logo_blue_green_pruple];

class LogInScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            yPosition: new Animated.Value(height/2),
            sign_in_step: 0,
            // sign_up_step: 0
        };

    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', function() {
            const { dispatch, navigation, nav } = this.props;


            // console.log(nav);
            if (this.state.sign_in_step == 1)
            {
                this.setState({sign_in_step: 0});
                return true;

            } 
            else{
                if (this.props.sign_up_step > 0){
                    let step = this.props.sign_up_step;
                    dispatch({ type: "updateSignUpStep", data: step - 1 });
                    return true;
                }
            }
        }.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress');
    }

    
    componentDidMount () {

        Animated.sequence([
            // decay, then spring to start and twirl
            Animated.timing(this.state.yPosition, {
                toValue: height * 250/800,
                easing: Easing.ease,
                duration: 150,
            }),
            Animated.timing(this.state.yPosition, {
                toValue: height * 275/800,
                easing: Easing.ease,
                duration: 50,
            }),
            Animated.timing(this.state.yPosition, {
                toValue: height * 250/800,
                easing: Easing.ease,
                duration: 50,
            }),
          ]).start(); 
    }

    onClickSignIn(){
        this.setState({
            sign_in_step: 1
        });
    }
    onClickSignUp = () => {
        let dispatch = this.props.dispatch;
        dispatch({ type: "updateSignUpStep", data: 1 });
    }

    displayMainContent(){
        // console.log('sign_in_step: ' + this.state.sign_in_step + '\n' + 'sign_up_step: ' + this.props.sign_up_step);
        console.log('width: ' + width + 'height: ' + height);
        if (this.state.sign_in_step == 0 && this.props.sign_up_step == 0)
            return <View>
                        <View style={styles.sign_up_btn_container}>
                            <TouchableOpacity onPress={this.onClickSignUp}>
                                <Image style={styles.sign_up_btn} source={images.sign_up_btn}/>
                            </TouchableOpacity>
                            
                        </View>
                        <View style={styles.sign_in_btn_container}>
                            <Text style={styles.sign_in_confirm}>Already have an account?   
                            <Text style={styles.sign_in_btn} onPress={()=>this.onClickSignIn()}>   sign in
                            </Text>
                            </Text>
                        </View>
                    </View>
        else if (this.state.sign_in_step != 0 && this.props.sign_up_step == 0) return <SignIn/>
        else if (this.state.sign_in_step == 0 && this.props.sign_up_step == 1) return <Step1/>
    }
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.logo_ssup_container}>
                <Image style={styles.logo_ssup_img} source={images.logo_ssup}/>
            </View>
            <View style={styles.blank_container}>
            </View>  
            {this.displayMainContent()}  
            <Animated.View style={{position: 'absolute', top: this.state.yPosition, left: 0, right: 0, bottom: 0,  alignItems: 'center'}}>
                <Image style={styles.bouncing_img} source={images.logo_purple_blue_green} />
            </Animated.View>
            
            
        </View>
      );
    }
}
// export default LogInScreen;
function mapStateToProps(state) {
    return {
      sign_up_step: state.userInfo.sign_up_step,
    };
}

export default connect(mapStateToProps)(LogInScreen);