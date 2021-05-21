import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FormScreen from './screens/Form';
import ListScreen from './screens/List';




const Stack = createStackNavigator();


const App = () => {

  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="List" 
          component={ListScreen} 
          options={{ title: 'List' }}
         
        />
        <Stack.Screen 
         name="Form"
         component={FormScreen}
         options={{ title: 'Form' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginTop: ConstantSourceNode.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
