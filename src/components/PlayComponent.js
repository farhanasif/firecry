import React, { Component, useState, useEffect, useContext } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

import { QuizContext } from '../contexts/QuizContext';
import { quizReducer } from '../stores/reducers/QuizReducer';

export default function PlayScreen({navigation}) {

    const [btntitle, setBtntitle] = useState('stop');
    const [count, setCount] = useState(10);
    const [loop, setLoop] = useState();
    const [questionCounter, setQuestonCounter] = useState(1);
    const { questions } = useContext(QuizContext);
    
    useEffect(() => {
        if(count == 10){
            timefunc()
            console.log('started ', count)
        }
        else if (count < 1){
            console.log('clear interval')
            clearInterval(loop);
            //starting again
            //check question counter
            if(questionCounter === questions.length){}
            else{
                setQuestonCounter(questionCounter+1)
                setCount(10)
            }
            
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

    const getPreviousQuestion = () => {
        let qlength = questions.length;
        if(questionCounter <= 1){}
        else{
            setQuestonCounter(questionCounter-1);
        }
    }

    const getNextQuestion = () => {
        let qlength = questions.length;
        if(questionCounter >= qlength){}
        else{
            setQuestonCounter(questionCounter+1);
        }
    }


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ marginVertical:10, fontSize: 24, fontWeight: '500', color: 'red'}}>Quiz 1 ({questionCounter}/{questions.length})</Text>
        <Text style={{ marginVertical:10, fontSize: 20, fontWeight: '500', color: 'green'}}>Time remaining : {count}s </Text>
        <Text style={{marginVertical: 10, fontSize: 18, fontWeight: '400', color: 'blue'}}>Q{questionCounter} . {questions.find(x => x.id === questionCounter).question}</Text>
        
        <Text style={{marginVertical: 5, fontSize: 18, fontWeight: '400', color: 'blue'}} >A. {questions.find(x => x.id === questionCounter).a}</Text>
        <Text style={{marginVertical: 5, fontSize: 18, fontWeight: '400', color: 'blue'}}>B. {questions.find(x => x.id === questionCounter).b}</Text>


        {/* <Button title={btntitle} onPress={() => clearInterval(loop)} />
        <Button title="Next" onPress={() => getNextQuestion()} />
        <Button title="Previous" onPress={() => getPreviousQuestion()} /> */}
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
}