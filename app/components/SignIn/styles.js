import { Dimensions } from 'react-native';
import index from '../../constants/index';

const { width, height } = Dimensions.get('window');

export default{
    sign_in_email: {
        width: index.text_input_width,

    },
    sign_in_email_text: {
        fontFamily: 'Omiwa',
        fontSize: index.font_size,
        color: '#444444'
    },
    sign_in_email_val: {
        width: '100%',
        height: index.text_input_height, 
        borderWidth: 2,
        borderColor: '#777777',
        padding: 2,
        paddingLeft: 10,   
        fontSize: index.font_size,
    },
    sign_in_pass: {
        width: index.text_input_width,

    },
    sign_in_pass_text: {
        fontFamily: 'Omiwa',
        fontSize: index.font_size,
        color: '#444444'
    },
    sign_in_pass_val: {
        width: '100%',
        height: 35, 
        borderWidth: 2,
        borderColor: '#777777',
        padding: 2,
        paddingLeft: 10,
        fontSize: index.font_size,
    },
    sign_in_or_text: {
        marginTop: 5,
        fontSize: index.font_size,
        fontFamily: 'Omiwa',
        color: '#444444'
    },
    google_icon_img: {
        width: width * 70/450,
        height: width * 70/450,
        marginLeft: 50,
        resizeMode:'stretch'
    },
    facebook_icon_img: {
        width: width * 70/450,
        height: width * 70/450,
        resizeMode:'stretch'

    },
    next_btn_img: {
        width: width * 110/450,
        height: height * 70/800,
        // marginTop: height *70/800,
        resizeMode:'stretch'
    }
}