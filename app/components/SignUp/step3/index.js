import * as React from 'react';
import { Button, View, Text, Image, ImageBackground, Animated, Easing, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

import images from '../../../themes/images';
import styles from './styles';

const { width, height } = Dimensions.get('window');

class Step3 extends React.Component {
    constructor(props) {
        super(props);
        

    }

    onClickNextBtn = () => {
        let dispatch = this.props.dispatch;
        dispatch({ type: "updateSignUpStep", data: 4 });
    }

    render(){
        return (
            <View style={{alignItems:'center', height: height*460/800}}>
                <View style={styles.sign_up_first}>
                    <Text style={styles.sign_up_first_text}>FirsT Name</Text>
                    <TextInput style={styles.sign_up_first_val} />
                </View>

                <View style={styles.sign_up_last}>
                    <Text style={styles.sign_up_last_text}>LasT Name</Text>
                    <TextInput style={styles.sign_up_last_val} />
                </View>

                <View style={styles.sign_up_color}>
                    <Text style={styles.sign_up_color_text}>WHaT's Your FavoriTe coLor</Text>
                    <TextInput style={styles.sign_up_color_val} />
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

export default connect(mapStateToProps)(Step3);