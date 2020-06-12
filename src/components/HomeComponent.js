import React, { useContext } from 'react';
import { View, Text, Button, TouchableWithoutFeedback } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';

const HomeScreen = ({ navigation }) => {
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen here</Text>
        <TouchableWithoutFeedback
            onPress={() => toggleAuth()}
        >
            <View>
                <Text style={{ padding: 20 }}>{ isAuthenticated ? 'Logged in' : 'Logged out' }</Text>
            </View>
        </TouchableWithoutFeedback>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
}
 
export default HomeScreen;