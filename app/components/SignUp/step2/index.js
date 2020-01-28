import * as React from 'react';
import { Button, View, Text, Image, ImageBackground, Animated, Easing, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

import images from '../../../themes/images';
import styles from './styles';

const { width, height } = Dimensions.get('window');

class Step2 extends React.Component {
    constructor(props) {
        super(props);
        

    }
	

    onClickNextBtn = () => {
        let dispatch = this.props.dispatch;
        dispatch({ type: "updateSignUpStep", data: 3 });
    }

    render(){
        return (
            <View style={{alignItems:'center', height: height*460/800}}>
                <View style={styles.sign_up_email}>
                    <Text style={styles.sign_up_email_text}>EmaiL</Text>
                    <TextInput style={styles.sign_up_email_val} />
                </View>

                <View style={styles.sign_up_password}>
                    <Text style={styles.sign_up_password_text}>PassworD</Text>
                    <TextInput secureTextEntry={true} style={styles.sign_up_password_val} />
                </View>

                <View style={styles.sign_up_password_confirm}>
                    <Text style={styles.sign_up_password_confirm_text}>Re EnTer PassworD</Text>
                    <TextInput secureTextEntry={true} style={styles.sign_up_password_confirm_val} />
                </View>

                <View style={styles.sign_up_birthday}>
                    <Text style={styles.sign_up_birthday_text}>DOB   musT Be aT LeasT 16</Text>
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <TextInput style={styles.sign_up_mm} keyboardType={'numeric'}/>
                        <TextInput style={styles.sign_up_dd} keyboardType={'numeric'}/>
                        <TextInput style={styles.sign_up_yyyy} keyboardType={'numeric'}/>
                    </View>
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

export default connect(mapStateToProps)(Step2);