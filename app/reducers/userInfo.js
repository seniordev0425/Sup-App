const initialFeedState = {
    sign_up_step: 0,
}

function UserInfo(state = initialFeedState, action){
    switch(action.type){
        case 'updateSignUpStep':
            return {
                ...state,
                sign_up_step: action.data
            };
        default:
            return state;
    }
}

export default UserInfo;