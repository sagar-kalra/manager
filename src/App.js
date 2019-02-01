import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBJh8juEUd_Rg6zNROqYC7PGhyLghfqY10',
            authDomain: 'manager-f11f6.firebaseapp.com',
            databaseURL: 'https://manager-f11f6.firebaseio.com',
            projectId: 'manager-f11f6',
            storageBucket: 'manager-f11f6.appspot.com',
            messagingSenderId: '1071898169653'
          });
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                 <Router />
            </Provider>
        );
    }

}

export default App;

