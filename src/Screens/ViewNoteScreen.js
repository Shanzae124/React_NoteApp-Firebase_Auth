import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// The renderNoteItem function is expecting an object with a notes property as an argument, but the data prop being passed to FlatList is an array of notes. Therefore, when the renderNoteItem function tries to access notes.title and notes.content, it is undefined and will give an error.
// To fix this, change the argument of renderNoteItem to be an object with a item property, and then replace notes with item inside the function,
const ViewNoteScreen = () => {
  const [note, setNote] = useState([]);

  const loadNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem('notes');
      if (storedNotes !== null) {
        setNote(JSON.parse(storedNotes));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadNotes();
  }, []);
  const renderNoteItem = ({item}) => {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.noteText}>{item.content}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={note}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderNoteItem}></FlatList>
    </View>
  );
};

export default ViewNoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'lightblue',
  },
  textContainer: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderRadius: 16,
    padding: 12,
    margin: 8,
  },
  titleText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '900',
  },
  noteText: {
    color: 'black',
    fontSize: 16,
  },
});
