import * as React from 'react';
import { Button, View, Text, Image, ImageBackground, Animated, Easing, Dimensions, TextInput } from 'react-native';
import images from '../../../themes/images';
import styles from './styles';

class Step1 extends React.Component {
    constructor(props) {
        super(props);
        

    }

    render(){
        return (
            <View style={{alignItems:'center'}}>
                <View style={styles.sign_up_email}>
                    <Text style={styles.sign_up_email_text}>EmaiL</Text>
                    <TextInput style={styles.sign_up_email_val} />
                </View>

                <View>
                    <Text style={styles.sign_up_or_text}>OR</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Image style={styles.facebook_icon_img} source={images.facebook_icon}/>
                    <Image style={styles.google_icon_img} source={images.google_icon}/>
                </View>
                <View>
                    <Image style={styles.next_btn_img} source={images.next_btn}/>
                </View>
            </View>

        );
    };
}
export default Step1;