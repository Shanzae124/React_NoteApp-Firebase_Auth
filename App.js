import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AddNoteScreen from './src/Screens/AddNoteScreen';
import ViewNoteScreen from './src/Screens/ViewNoteScreen';
import {NavigationContainer} from '@react-navigation/native';
import Provider, {MyStack} from './src/navigation';

const App = () => {
  return <Provider />;
};

export default App;

const styles = StyleSheet.create({});
