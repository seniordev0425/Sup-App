const initialFeedState = {
    sign_up_step: 0,
    sign_in_step: 0,
    is_logo_gif: 0,
}

function UserInfo(state = initialFeedState, action){
    switch(action.type){
        case 'updateSignUpStep':
            return {
                ...state,
                sign_up_step: action.data
            };
        case 'updateSignInStep':
            return {
                ...state,
                sign_in_step: action.data
            };
        case 'isLogoGif':
            return {
                ...state,
                is_logo_gif: action.data
            };
        default:
            return state;
    }
}

export default UserInfo;