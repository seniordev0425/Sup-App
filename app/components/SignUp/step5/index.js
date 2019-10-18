import * as React from 'react';
import { Button, View, Text, Image, ImageBackground, Animated, Easing, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

import images from '../../../themes/images';
import styles from './styles';

const { width, height } = Dimensions.get('window');

class Step5 extends React.Component {
    constructor(props) {
        super(props);
        

    }

    onClickNextBtn = () => {
        let dispatch = this.props.dispatch;
        dispatch({ type: "updateSignUpStep", data: 6 });
    }

    render(){
        return (
            <View style={{alignItems:'center', height: height*460/800}}>
                <View style={styles.sign_up_boardgame}>
                    <Text style={styles.sign_up_boardgame_text}>what tabletop or boardgames</Text>
                    <TextInput style={styles.sign_up_boardgame_val} />
                </View>

                <View style={styles.sign_up_cardgame}>
                    <Text style={styles.sign_up_cardgame_text}>what kind of card games</Text>
                    <TextInput style={styles.sign_up_cardgame_val} />
                </View>

                <View style={styles.sign_up_kindwork}>
                    <Text style={styles.sign_up_kindwork_text}>what kind of work</Text>
                    <TextInput style={styles.sign_up_kindwork_val} />
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

export default connect(mapStateToProps)(Step5);