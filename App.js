// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthContextProvider from './src/contexts/AuthContext';

import HomeComponent from './src/components/HomeComponent';
import DetailsComponent from './src/components/DetailsComponent';
import PlayComponent from './src/components/PlayComponent';

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeComponent} />
            <Stack.Screen name="Details" component={DetailsComponent} />
            <Stack.Screen name="Play" component={PlayComponent} />
        </Stack.Navigator>
      </AuthContextProvider>
    </NavigationContainer>
  );
}

export default App;