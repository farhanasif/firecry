// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthContextProvider from './src/contexts/AuthContext';
import QuizContextProvider from './src/contexts/QuizContext';

import HomeComponent from './src/components/HomeComponent';
import DetailsComponent from './src/components/DetailsComponent';
import PlayComponent from './src/components/PlayComponent';

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
      <QuizContextProvider>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeComponent} />
            <Stack.Screen name="Details" component={DetailsComponent} />
            
            <Stack.Screen 
              name="Play" 
              component={PlayComponent} 
              options={{
                headerShown: false
              }}
            />
            
        </Stack.Navigator>
        </QuizContextProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
}

export default App;