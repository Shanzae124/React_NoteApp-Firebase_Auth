import {createStackNavigator} from '@react-navigation/stack';
import {useState, useEffect, useContext} from 'react';
import AddNoteScreen from '../Screens/AddNoteScreen';
import DeleteScreen from '../Screens/DeleteScreen';
import HomeScreen from '../Screens/HomeScreen';
import ViewNoteScreen from '../Screens/ViewNoteScreen';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#0782F9',
        },
        headerTintColor: 'white',
        headerTitle: '',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="View" component={ViewNoteScreen} />
      <Stack.Screen name="Add" component={AddNoteScreen} />
      <Stack.Screen name="Delete" component={DeleteScreen} />
    </Stack.Navigator>
  );
}
