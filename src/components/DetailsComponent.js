import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailsScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen here</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
}