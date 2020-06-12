import React, { useContext } from 'react';
import { View, Text, Button, TouchableWithoutFeedback } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';

const HomeScreen = ({ navigation }) => {
    //const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const { isAuthenticated, dispatch } = useContext(AuthContext);

    const handleToggle = () => {
        dispatch({ type: 'TOGGLE_AUTH', isAuthenticated});
    }

    const handleLogin = () => {
        console.log(isAuthenticated)
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen here</Text>
        <TouchableWithoutFeedback
            onPress={handleToggle}
        >
            <View>
                <Text style={{ padding: 20 }}>{ isAuthenticated ? 'Logged in' : 'Logged out' }</Text>
            </View>
        </TouchableWithoutFeedback>
        
        <TouchableWithoutFeedback
            onPress={handleLogin}
        >
            <View>
                <Text style={{ 
                    marginBottom: 30,
                    width: 260,
                    height: 40,
                    alignItems: 'center',
                    textAlign: 'center',
                    fontWeight: "bold",
                    backgroundColor: 'yellow' }}>
                { isAuthenticated ? 'Try Logged out' : 'Try Logged in' }
                </Text>
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