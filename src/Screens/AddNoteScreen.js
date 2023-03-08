import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddNoteScreen = () => {
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');

  const onAdd = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem('notes');
      const notes = storedNotes ? JSON.parse(storedNotes) : [];
      const updatedNotes = [...notes, {title, content: note}];
      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
      setNote('');
      setTitle('');
      Alert.alert('note added');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // <View>
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'lightblue',
      }}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Title"
            style={[styles.input]}
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <TextInput
            placeholder="Note"
            style={[styles.input, styles.inputSize]}
            value={note}
            onChangeText={text => setNote(text)}
            multiline={true}
            numberOfLines={4}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onAdd}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AddNoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  inputContainer: {
    width: Dimensions.get('window').width - 100,
  },
  input: {
    fontSize: 20,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 12,
    paddingHorizontal: 12,
    borderColor: 'black',
    borderWidth: 2,
    color: 'black',
  },
  buttonContainer: {
    width: '50%',
    marginTop: 20,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputSize: {
    paddingBottom: 35,
  },
  button: {
    margin: 10,
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#0782F9',
    alignItems: 'center',
    padding: 14,
  },
  buttonText: {
    fontWeight: '800',
    fontSize: 18,
    color: 'black',
  },
});
