// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase';

import AuthContextProvider from './src/contexts/AuthContext';

import HomeComponent from './src/components/HomeComponent';
import DetailsComponent from './src/components/DetailsComponent';

const Stack = createStackNavigator();

// const firebaseConfig = {
//   apiKey: "AIzaSyAyZ5nlER4Ft_246ppn0wJNppjoJo_7uBk",
//   authDomain: "react-redux-c02aa.firebaseapp.com",
//   databaseURL: "https://react-redux-c02aa.firebaseio.com",
//   projectId: "react-redux-c02aa",
//   storageBucket: "react-redux-c02aa.appspot.com",
//   messagingSenderId: "662703363063",
//   appId: "1:662703363063:web:8d98b7f0520d264c09d4f2",
//   measurementId: "G-FKYVMN7L9M"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();


function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeComponent} />
            <Stack.Screen name="Details" component={DetailsComponent} />
        </Stack.Navigator>
      </AuthContextProvider>
    </NavigationContainer>
  );
}

export default App;