import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default{
    sign_up_email: {
        width: 250,

    },
    sign_up_email_text: {
        fontFamily: 'Omiwa',
        fontSize: 18,
        color: '#444444'
    },
    sign_up_email_val: {
        width: '100%',
        height: 40, 
        borderWidth: 2,
        borderColor: '#777777'
    },
    sign_up_or_text: {
        marginTop: 5,
        fontSize: 18,
        fontFamily: 'Omiwa',
        color: '#444444'
    },
    google_icon_img: {
        width: 70,
        height: 70,
        marginLeft: 30
    },
    facebook_icon_img: {
        width: 70,
        height: 70,

    },
    next_btn_img: {
        width: 110,
        height: 70,
        marginTop: 100
    }
}