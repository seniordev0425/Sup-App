import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default{
    sign_up_end_first_name_text: {
        fontFamily: 'Omiwa',
        fontSize: 45,
        color: '#444444'
    },
    sign_up_end: {
      flexDirection: 'row',
      marginTop: height * 20/800,
    },
    sign_up_end_email_sent: {
        fontSize: 18,
        
    },
    sign_up_end_verify: {
        fontFamily: 'Omiwa',
        color: '#f562e9',
        fontSize: 18,
        marginLeft: 50
        
    },
    next_btn_img: {
        width: width * 110/450,
        height: height * 70/800,
        resizeMode:'stretch'
    }
}