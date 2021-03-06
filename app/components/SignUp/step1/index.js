import * as React from 'react';
import { Button, View, Text, Image, ImageBackground, Animated, Easing, Dimensions, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import { connect } from "react-redux";

import images from '../../../themes/images';
import styles from './styles';

const { width, height } = Dimensions.get('window');

class Step1 extends React.Component {
    constructor(props) {
        super(props);
        

    }

    onClickNextBtn = () => {
        let {dispatch} = this.props;
        dispatch({ type: "updateSignUpStep", data: 2 });
    }

    render(){
        return (
            <View style={{alignItems:'center', height: height*460/800}}>

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
                <View style={{position:'absolute', bottom:50}}>
                    <TouchableOpacity onPress={this.onClickNextBtn}>
                        <Image style={styles.next_btn_img} source={images.next_btn}/>
                    </TouchableOpacity>
                </View>
            </View>

        );
    };
}
function mapStateToProps(state) {
    return {
      sign_up_step: state.userInfo.sign_up_step,
    };
}

export default connect(mapStateToProps)(Step1);