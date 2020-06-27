import React, { createContext, useReducer, useEffect } from 'react';
import { quizReducer } from '../stores/reducers/QuizReducer';

export const QuizContext = createContext();

const geturl = "http://localhost:8000/books";

const QuizContextProvider = (props) => {
  const [questions, dispatch] = useReducer(quizReducer, []);
  
  useEffect(() => {
    //console.log('----------useEffect-------------')
    //dummy data
    const data = [
        {
            "id":1,
            "question":"আমার সোনার বাংলা - গানটির রচয়িতা কে?",
            "a":"রবীন্দ্রনাথ ঠাকুর",
            "b":"কাজী নজরুল ইসলাম",
            "answer":"a"
        },
        {
            "id":2,
            "question":"Current Fifa World Cup Champion?",
            "a":"Brazil",
            "b":"France",
            "answer":"b"
        },
        {
            "id":3,
            "question":"Capital of Bangladesh?",
            "a":"Sylhet",
            "b":"Dhaka",
            "answer":"b"
        },
        {
            "id":4,
            "question":"Capital of India",
            "a":"Chennai",
            "b":"Mumbai",
            "answer":"b"
        },
        {
            "id":5,
            "question":"Who is the current Prime Minister of Bangladesh?",
            "a":"Khaleda",
            "b":"Hasina",
            "answer":"b"
        },
        {
            "id":6,
            "question":"Father of the nation?",
            "a":"Tajuddin",
            "b":"Sheikh Mujib",
            "answer":"b"
        },
    ];

    dispatch({type: "INIT", data});

  }, []);
  return (
    <QuizContext.Provider value={{ questions, dispatch }}>
      {props.children}
    </QuizContext.Provider>
  );
}
 
export default QuizContextProvider;