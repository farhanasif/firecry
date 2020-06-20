import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Button, TouchableWithoutFeedback } from 'react-native';
import firebase from '../firebase/config';
import { AuthContext } from '../contexts/AuthContext';

const HomeScreen = ({ navigation }) => {

    const [userState, setUserState] = useState(null);
    const [userEmail, setUserEmail] = useState('');
    const { state, dispatch } = useContext(AuthContext);

    const handleToggle = () => {
        //dispatch({ type: 'TOGGLE_AUTH', isAuthenticated});
        console.log('handle')
    }

    const handleLogin = async() => {
        let response = await firebase.login('f.asif2010@gmail.com','123123123');
        if(response.message){
            console.log(response.message)
        }
        else{
            return dispatch({type: 'LOGIN', payload: response.user})
        }
    }

    useEffect(() => {
        firebase.getUserState().then(user => {
            if(user){
                setUserEmail(user.email);
                setUserState(user);
            }
        })
    })

    const logout = () => {
        firebase.logout();
        setUserState(null);
        return dispatch({
            type: 'LOGOUT',
            payload: {}
        })
    }

    let Buttons;

    if(userState !=null){
        Buttons = (
            <Button
                title="Logout"
                onPress={logout}
            />
        )
    }
    else{
        Buttons = (
            <Button
                title="Login"
                onPress={handleLogin}
            />
        )
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen here</Text>
        <View>
            <Text style={{ padding: 20 }}>{userState ? userEmail: 'No user'}</Text>
        </View>
        
        {Buttons}

        <Button
            title="Reset Password"
            onPress={() => navigation.navigate('Details')}
        />

        <Button
            title="Play"
            onPress={() => navigation.navigate('Play')}
        />
      </View>
    );
}
 
export default HomeScreen;