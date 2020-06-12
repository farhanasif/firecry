import React, { Component, createContext, useEffect, useReducer, useState } from 'react';
import { AuthReducer } from '../stores/reducers/AuthReducer';

import * as firebase from 'firebase'
import 'firebase/firestore';

export const AuthContext = createContext();

const firebaseConfig = {
    apiKey: "AIzaSyAyZ5nlER4Ft_246ppn0wJNppjoJo_7uBk",
    authDomain: "react-redux-c02aa.firebaseapp.com",
    databaseURL: "https://react-redux-c02aa.firebaseio.com",
    projectId: "react-redux-c02aa",
    storageBucket: "react-redux-c02aa.appspot.com",
    messagingSenderId: "662703363063",
    appId: "1:662703363063:web:8d98b7f0520d264c09d4f2",
    measurementId: "G-FKYVMN7L9M"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// class AuthContextProvider extends Component {
//   state = {
//     isAuthenticated: false
//   }
//   toggleAuth = () => {
//     this.setState({ isAuthenticated: !this.state.isAuthenticated });
//   }
  
//   render() { 
//     return (
//       <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
//         {this.props.children}
//       </AuthContext.Provider>
//     );
//   }
// }

const AuthContextProvider = (props) => {
    const [isAuthenticated, dispatch] = useReducer(AuthReducer, false);

    useEffect(() => {
        console.log('req-init')
        const data = false;
        dispatch({type: "INIT", data});
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, dispatch }}>
          {props.children}
        </AuthContext.Provider>
    );
}
 
export default AuthContextProvider;