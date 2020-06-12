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

const AuthContextProvider = (props) => {
    const [isAuthenticated, dispatch] = useReducer(AuthReducer, false);
    //const [user, dispatch] = useReducer(UserReducer, false);

    useEffect(() => {
        console.log('req-init')
        const data = false;
        dispatch({type: "LOAD", data});
        async function fetchData(){
            firebase.auth().onAuthStateChanged((user) => {
                console.log(user)
                if (user != null) {
                    const data = true;
                    dispatch({type: "LOAD", data});
                }
                else{
                    const data = false;
                    dispatch({type: "LOAD", data});
                }
            
            // Do other things
            });
        }
        fetchData();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, dispatch }}>
          {props.children}
        </AuthContext.Provider>
    );
}
 
export default AuthContextProvider;