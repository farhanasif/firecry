import React, { Component, useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function PlayScreen({navigation}) {

    const [timer, setTimer] = useState(false);
    const [btntitle, setBtntitle] = useState('stop');
    const [count, setCount] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count => count - 1);
            if(count === 0){
                clearInterval(interval);
            }
        }, 1000);
    
        return () => {
            clearInterval(interval);
        };
    },[]);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the play component</Text>
        <Text>Counter started : {count} </Text>
        <Button title={btntitle} onPress={() => btntitle == 'start' ? setBtntitle('stop'):setBtntitle('start')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
}