import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import AppWithNavigationState from './app/navigators/AppNavigator' ;
import AppReducer from './app/reducers/index';
import {middleware} from './app/utils/redux'

export default class App extends Component{
  store = createStore(AppReducer, applyMiddleware(middleware));  
  render(){
      return (
          <Provider store = {this.store}>
                <AppWithNavigationState/>
          </Provider>
      );
  }
}



