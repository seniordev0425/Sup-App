import * as React from 'react';
import { Button, View, Text, Image, ImageBackground, Animated, Easing, Dimensions, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import Hide from "react-native-hide-with-keyboard";
import images from '../../themes/images';
import styles from './styles';

const { width, height } = Dimensions.get('window');

class SignIn extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render(){
        return (
            
            <View style={{alignItems:'center', height: height*460/800}}>
                
                <View style={styles.sign_in_email}>
                    <Text style={styles.sign_in_email_text}>EmaiL</Text>
                    <TextInput style={styles.sign_in_email_val} />
                </View>

                <View style={styles.sign_in_pass}>
                    <Text style={styles.sign_in_pass_text}>PassworD</Text>
                    <TextInput secureTextEntry={true} style={styles.sign_in_pass_val} />
                </View>
                <View>
                    <Text style={styles.sign_in_or_text}>OR</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Image style={styles.facebook_icon_img} source={images.facebook_icon}/>
                    <Image style={styles.google_icon_img} source={images.google_icon}/>
                </View>
                <View style={{position:'absolute', bottom:50}}>
                    <Image style={styles.next_btn_img} source={images.next_btn}/>
                </View>
                
            </View>
            

        );
    };
}
export default SignIn;