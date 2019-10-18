import { Dimensions } from 'react-native';
import index from '../../../constants/index';

const { width, height } = Dimensions.get('window');

export default{
    sign_up_email: {
        width: index.text_input_width,

    },
    sign_up_email_text: {
        fontFamily: 'Omiwa',
        fontSize: index.font_size,
        color: '#444444'
    },
    sign_up_email_val: {
        width: '100%',
        height: index.text_input_height, 
        borderWidth: 2,
        borderColor: '#777777',
        padding: 2,
        paddingLeft: 10,
        fontSize: index.font_size,
    },
    sign_up_password: {
        width: index.text_input_width,
        marginTop: 5

    },
    sign_up_password_text: {
        fontFamily: 'Omiwa',
        fontSize: index.font_size,
        color: '#444444'
    },
    sign_up_password_val: {
        width: '100%',
        height: index.text_input_height, 
        borderWidth: 2,
        borderColor: '#777777',
        padding: 2,
        paddingLeft: 10,
        fontSize: index.font_size,
    },
    sign_up_password_confirm: {
        width: index.text_input_width,
        marginTop: 5

    },
    sign_up_password_confirm_text: {
        fontFamily: 'Omiwa',
        fontSize: index.font_size,
        color: '#444444'
    },
    sign_up_password_confirm_val: {
        width: '100%',
        height: index.text_input_height, 
        borderWidth: 2,
        borderColor: '#777777',
        padding: 2,
        paddingLeft: 10,
        fontSize: index.font_size,
    },
    sign_up_birthday: {
        width: index.text_input_width,
        marginTop: 5

    },
    sign_up_birthday_text: {
        fontFamily: 'Omiwa',
        fontSize: index.font_size,
        color: '#444444'
    },
    sign_up_mm: {
        width: '23%',
        height: index.text_input_height, 
        borderWidth: 2,
        borderColor: '#777777',
        padding: 2,
        textAlign: 'center',
        fontSize: index.font_size,
    },
    sign_up_dd: {
        width: '23%',
        height: index.text_input_height, 
        borderWidth: 2,
        borderColor: '#777777',
        padding: 2,
        textAlign: 'center',
        fontSize: index.font_size,
    },
    sign_up_yyyy: {
        width: '35%',
        height: index.text_input_height, 
        borderWidth: 2,
        borderColor: '#777777',
        padding: 2,
        textAlign: 'center',
        fontSize: index.font_size,
    },
    
    next_btn_img: {
        width: width * 110/450,
        height: height * 70/800,
        resizeMode:'stretch'
    }
}