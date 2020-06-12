import React, { Component, createContext, useEffect, useReducer, useState } from 'react';
import { AuthReducer } from '../stores/reducers/AuthReducer';
export const AuthContext = createContext();

const initialState = {
    user: {}
}

const AuthContextProvider = (props) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    const value = {state, dispatch}

    return (
        <AuthContext.Provider value={value}>
          {props.children}
        </AuthContext.Provider>
    );
}
 
export default AuthContextProvider;