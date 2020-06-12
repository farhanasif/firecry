// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeComponent from './src/components/HomeComponent';
import DetailsComponent from './src/components/DetailsComponent';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeComponent} />
        <Stack.Screen name="Details" component={DetailsComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;