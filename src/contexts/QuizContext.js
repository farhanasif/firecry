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
            "question":"Who is the winner of BPL 2019/2020?",
            "a":"Liverpool",
            "b":"Manchester City",
            "answer":"a"
        },
        {
            "id":2,
            "question":"Current Fifa World Cup Champion?",
            "a":"Brazil",
            "b":"France",
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