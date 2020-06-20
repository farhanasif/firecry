import React, { Component, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function PlayScreen({navigation}) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the play component</Text>
      </View>
    );
}