import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {AuthContext} from './AuthProvider';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from './StackProvider';
import Authstack from './Authstack';

const Routes = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const {user, setUser} = useContext(AuthContext);

  // Handle user state changes
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <MyStack /> : <Authstack />}
    </NavigationContainer>
  );
};
export default Routes;

const styles = StyleSheet.create({});
