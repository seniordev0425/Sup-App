import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default{
    container: {
        flex: 1,
        // justifyContent: 'space-between', 
        width: width,
        height: height,
        backgroundColor: 'white'
    },
    bouncing_img: {
        width: width * 175/450,
        height: height * 136/800,
        resizeMode: 'stretch'
    },
    logo_ssup_container: {
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    logo_ssup_img: {
        width: width * 340/450,
        height: height * 220/800,
        resizeMode: 'stretch',
    },
    blank_container: {
        height: height * 120/800,
        // backgroundColor: 'blue'
    },
    sign_up_btn_container: {
        width: width,
        marginTop:height * 50/800,
        alignItems: 'center'
    },
    sign_up_btn: {
        width: 250,
        height: height * 50/800,
    },
    sign_in_btn_container: {
        alignItems: 'center',
        marginTop: height * 250/800,
    },
    sign_in_confirm: {
        fontSize: 18,
    },
    sign_in_btn: {
        fontFamily: 'Omiwa',
        color: '#f562e9'
    }
}