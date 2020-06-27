import React, { Component, useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function PlayScreen({navigation}) {

    const [btntitle, setBtntitle] = useState('stop');
    const [count, setCount] = useState(6);
    const [loop, setLoop] = useState();
    

    useEffect(() => {
        if(count == 6){
            timefunc()
            console.log('started ', count)
        }
        else if (count < 1){
            console.log('clear interval')
            clearInterval(loop);
            //starting again
            setCount(6)
        }
        else{
            console.log('value change effect:',count)
        }
    },[count]);

    const timefunc = () => {
        setLoop(setInterval(() => {
            setCount(count => count - 1)
        }, 1000))
    }


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the play component</Text>
        <Text>Counter started : {count} </Text>
        <Button title={btntitle} onPress={() => clearInterval(loop)} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
}