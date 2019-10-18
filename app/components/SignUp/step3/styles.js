import { Dimensions } from 'react-native';
import index from '../../../constants/index';

const { width, height } = Dimensions.get('window');

export default{
    sign_up_first: {
        width: index.text_input_width,

    },
    sign_up_first_text: {
        fontFamily: 'Omiwa',
        fontSize: index.font_size,
        color: '#444444'
    },
    sign_up_first_val: {
        width: '100%',
        height: index.text_input_height, 
        borderWidth: 2,
        borderColor: '#777777',
        padding: 2,
        paddingLeft: 10,
        fontSize: index.font_size,
    },
    sign_up_last: {
        width: index.text_input_width,
        marginTop: 5

    },
    sign_up_last_text: {
        fontFamily: 'Omiwa',
        fontSize: index.font_size,
        color: '#444444'
    },
    sign_up_last_val: {
        width: '100%',
        height: index.text_input_height, 
        borderWidth: 2,
        borderColor: '#777777',
        padding: 2,
        paddingLeft: 10,
        fontSize: index.font_size,
    },
    sign_up_color: {
        width: index.text_input_width,
        marginTop: 5

    },
    sign_up_color_text: {
        fontFamily: 'Omiwa',
        fontSize: index.font_size,
        color: '#444444',
    },
    sign_up_color_val: {
        width: '100%',
        height: index.text_input_height, 
        borderWidth: 2,
        borderColor: '#777777',
        padding: 2,
        paddingLeft: 10,
        fontSize: index.font_size,
    },
    
    next_btn_img: {
        width: width * 110/450,
        height: height * 70/800,
        resizeMode:'stretch'
    }
}