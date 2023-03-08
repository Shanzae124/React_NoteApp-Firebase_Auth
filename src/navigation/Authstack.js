import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useEffect, useState} from 'react';
import LogInScreen from '../Screens/LogInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import SplashScreen from '../Screens/SplashScreen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Stack = createStackNavigator();
export function Authstack() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 4000);

    GoogleSignin.configure({
      webClientId:
        '176157939674-jot4f5ms6pdm3dp4b0nef59i6315h3q1.apps.googleusercontent.com',
    });
  }, []);

  return (
    <Stack.Navigator>
      {isShowSplash ? (
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
      ) : null}
      <Stack.Screen
        name="Login"
        component={LogInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Authstack;

const styles = StyleSheet.create({});
