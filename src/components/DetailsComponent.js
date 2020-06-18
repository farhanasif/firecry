import React, { Component, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import firebase from '../firebase/config';



export default function DetailsScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [color, setColor] = useState('black');

    const resetPassword = async() => {
      let response = await firebase.checkUserEmailAndVerify(email);
      console.log(response)
      if(response.message){
          console.log(response.message);
          setColor('red')
          setText(response.message)
      }
      else{
        setColor('green')
        setText('Please check you email for password reset')
      }
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Enter your email to reset password</Text>
        <TextInput
          style={{height: 40, width: 200}}
          placeholder="email"
          onChangeText={email => setEmail(email)}
          defaultValue={email}
        />
        <Button
                title="Reset Password"
                onPress={resetPassword}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Text style={{ color: color}}>{text}</Text>
      </View>
    );
}