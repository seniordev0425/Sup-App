import * as React from 'react';
import { Button, View, Text, Image, ImageBackground, Animated, Easing, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

import images from '../../../themes/images';
import styles from './styles';

const { width, height } = Dimensions.get('window');

class Step4 extends React.Component {
    constructor(props) {
        super(props);
        

    }

    onClickNextBtn = () => {
        let dispatch = this.props.dispatch;
        dispatch({ type: "updateSignUpStep", data: 5 });
    }

    render(){
        return (
            <View style={{alignItems:'center', height: height*460/800}}>
                <View style={styles.sign_up_hobby}>
                    <Text style={styles.sign_up_hobby_text}>WHaT are Your HoBBies</Text>
                    <TextInput placeholder={'Pick aT LeasT one'} style={styles.sign_up_hobby_val} />
                </View>

                <View style={styles.sign_up_looking_work}>
                    <Text style={styles.sign_up_looking_work_text}>Are You Looking For work</Text>
                    <TextInput placeholder={'Yes or no'} style={styles.sign_up_looking_work_val} />
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

export default connect(mapStateToProps)(Step4);