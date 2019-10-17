import { combineReducers } from 'redux';
import { AppNavigator } from '../navigators/AppNavigator';

import nav from './nav';
import userInfo from './userInfo';
// import user from './user'
// import appdata from './appdata'
const AppReducer  = combineReducers({
    nav,
    userInfo
    // appdata
});

export default AppReducer;
