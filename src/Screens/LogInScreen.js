import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useRef, useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';

const LogInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setError] = useState(null);

  const {logIn, googleLogin} = useContext(AuthContext);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const focusNextInput = nextInputRef => {
    nextInputRef.current.focus();
  };
  const handleLogin = async () => {
    try {
      await logIn(email, password);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          ref={emailRef}
          onSubmitEditing={() => focusNextInput(passwordRef)}
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
          ref={passwordRef}
          onSubmitEditing={() => focusNextInput(emailRef)}
        />
      </View>
      {isError && (
        <Text style={{color: 'red', fontWeight: '600', fontSize: 16}}>
          password or email is wrong
        </Text>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
        {Platform.OS === 'android' ? (
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => googleLogin()}>
              <Text style={styles.buttonText}>Sign In With Google</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </KeyboardAvoidingView>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  inputContainer: {
    width: Dimensions.get('window').width - 100,
  },
  buttonContainer: {
    width: Dimensions.get('window').width - 100,
    marginTop: 50,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    borderColor: '#0782F9',
    borderWidth: 1,
  },
  button: {
    margin: 10,
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#0782F9',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    fontSize: 18,
    fontWeight: '700',
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 12,
    paddingStart: 6,
  },
  buttonText: {
    fontWeight: '800',
    fontSize: 18,
    color: 'black',
  },
});
