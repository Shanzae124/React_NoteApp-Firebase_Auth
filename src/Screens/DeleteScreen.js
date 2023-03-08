import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FlatList} from 'react-native-gesture-handler';
import IonIcon from 'react-native-vector-icons/Ionicons';
const DeleteScreen = () => {
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
  const deleteNote = async index => {
    try {
      const updatedNotes = [...note];
      updatedNotes.splice(index, 1);
      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
      setNote(updatedNotes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadNotes();
  }, []);

  const renderNoteItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.titleText, styles.titleOutline]}>
            {item.title}
          </Text>
          <Text style={styles.noteText}>{item.content}</Text>
        </View>
        <View style={styles.buttonConatiner}>
          <IonIcon
            name="trash-outline"
            size={25}
            style={{
              color: 'black',
              marginTop: 30,
            }}
            onPress={() => deleteNote(item)}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={note}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderNoteItem}
      />
    </View>
  );
};

export default DeleteScreen;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'transparent',
    borderWidth: 2,
    margin: 8,
    borderRadius: 16,
  },
  container: {
    backgroundColor: 'lightblue',
    padding: 10,
    flex: 1,
  },
  textContainer: {
    width: Dimensions.get('screen').width - 100,
    padding: 6,
    margin: 8,
  },
  titleOutline: {
    borderBottomWidth: 2,
    margin: 4,
    padding: 4,
  },
  buttonText: {
    color: 'black',
    padding: 6,
    fontSize: 16,
    fontWeight: '900',
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
