import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logIn: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (error) {
            throw new Error(error.message);
            // console.log(error);
          }
        },
        googleLogin: async () => {
          try {
            // Get the users ID token
            const {idToken} = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            return auth().signInWithCredential(googleCredential);
          } catch (error) {
            console.log(error);
          }
        },
        signUp: async (email, password) => {
          try {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
              throw new Error('Invalid email format');
            }
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (error) {
            Alert.alert('Error', error.message);
            console.log(error);
          }
        },
        logOut: async () => {
          try {
            await auth().signOut();
          } catch (error) {
            console.log(error);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

const styles = StyleSheet.create({});
