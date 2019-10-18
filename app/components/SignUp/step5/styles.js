import { Dimensions } from 'react-native';
import index from '../../../constants/index';
const { width, height } = Dimensions.get('window');

export default{
    sign_up_boardgame: {
        width: index.text_input_width,

    },
    sign_up_boardgame_text: {
        fontFamily: 'Omiwa',
        fontSize: index.font_size,
        color: '#444444'
    },
    sign_up_boardgame_val: {
        width: '100%',
        height: index.text_input_height, 
        borderWidth: 2,
        borderColor: '#777777',
        padding: 2,
        paddingLeft: 10,
        fontFamily: 'Omiwa',
        fontSize: index.font_size,
    },
    sign_up_cardgame: {
        width: index.text_input_width,
        marginTop: 5

    },
    sign_up_cardgame_text: {
        fontFamily: 'Omiwa',
        fontSize: index.font_size,
        color: '#444444'
    },
    sign_up_cardgame_val: {
        width: '100%',
        height: index.text_input_height, 
        borderWidth: 2,
        borderColor: '#777777',
        padding: 2,
        paddingLeft: 10,
        fontFamily: 'Omiwa',
        fontSize: index.font_size,
    },
    sign_up_kindwork: {
        width: index.text_input_width,
        marginTop: 5

    },
    sign_up_kindwork_text: {
        fontFamily: 'Omiwa',
        fontSize: index.font_size,
        color: '#444444'
    },
    sign_up_kindwork_val: {
        width: '100%',
        height: index.text_input_height, 
        borderWidth: 2,
        borderColor: '#777777',
        padding: 2,
        paddingLeft: 10,
        fontFamily: 'Omiwa',
        fontSize: index.font_size,
    },
    
    next_btn_img: {
        width: width * 110/450,
        height: height * 70/800,
        resizeMode:'stretch'
    }
}