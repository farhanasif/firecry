import React, { Component, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function DetailsScreen({navigation}) {
    const [text, setText] = useState('');
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Enter your email to reset password</Text>
        <TextInput
        style={{height: 40}}
        placeholder="email"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
}