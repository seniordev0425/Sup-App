import * as React from 'react';
import { Button, View, Text, Image, ImageBackground, Animated, Easing, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

import images from '../../../themes/images';
import styles from './styles';

const { width, height } = Dimensions.get('window');

class Step6 extends React.Component {
    constructor(props) {
        super(props);
        

    }

    onClickNextBtn = () => {
        let dispatch = this.props.dispatch;
        dispatch({ type: "updateSignUpStep", data: 0 });
        dispatch({ type: "updateSignInStep", data: 1 });
    }

    render(){
        return (
            <View style={{alignItems:'center', height: height*460/800}}>
                <View>
                    <Text style={styles.sign_up_end_first_name_text}>First name</Text>
                </View>



                <View style={styles.sign_up_end}>
                    <Text style={styles.sign_up_end_email_sent}>We sent you an email.</Text>
                    <Text style={styles.sign_up_end_verify}>verify</Text>
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

export default connect(mapStateToProps)(Step6);