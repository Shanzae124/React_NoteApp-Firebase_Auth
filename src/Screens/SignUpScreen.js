import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useContext, useState, useRef} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import {Alert} from 'react-native';
const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signUp} = useContext(AuthContext);

  const [passwordError, setPasswordError] = useState('');
  const [hasNumberError, setHasNumberError] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const passwordHandler = text => {
    if (text.length < 6) {
      setPasswordError('Password must be at least 8 characters long');
      setIsPasswordValid(false);
    } else {
      setPasswordError('');
      setIsPasswordValid(true);
    }

    if (!/\d/.test(text)) {
      setHasNumberError('Password must contain at least one number');
      setIsPasswordValid(false);
    } else {
      setHasNumberError('');
      setIsPasswordValid(true);
    }
    setPassword(text);
  };

  const signUpHandler = () => {
    if (isPasswordValid) {
      signUp(email, password);
    } else {
      Alert.alert(
        'Invalid password or email',
        passwordError + '\n' + hasNumberError,
      );
    }
  };

  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const focusNextInput = nextInputRef => {
    nextInputRef.current.focus();
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          keyboardAppearance="dark"
          ref={emailRef}
          onSubmitEditing={() => focusNextInput(passwordRef)}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          value={password}
          onChangeText={passwordHandler}
          secureTextEntry
          ref={passwordRef}
          onSubmitEditing={() => focusNextInput(emailRef)}
        />
        {passwordError ? (
          <Text style={{color: 'red', fontSize: 14, alignSelf: 'center'}}>
            {passwordError}
          </Text>
        ) : null}
        {hasNumberError ? (
          <Text style={{color: 'red', fontSize: 14, alignSelf: 'center'}}>
            {hasNumberError}
          </Text>
        ) : null}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={signUpHandler}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
});
