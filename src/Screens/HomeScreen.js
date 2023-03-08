import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../navigation/AuthProvider';

const HomeScreen = ({navigation}) => {
  const onView = () => {
    navigation.navigate('View');
  };
  const onAdd = () => {
    navigation.navigate('Add');
  };
  const onDelete = () => {
    navigation.navigate('Delete');
  };
  const {logOut} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <IonIcon
          name="person-circle-outline"
          size={50}
          style={{
            marginEnd: 6,
          }}
        />
        <TouchableOpacity
          style={{
            marginStart: 6,
          }}
          onPress={() => logOut()}>
          <Text style={{fontWeight: '900', fontSize: 20}}>LogOut</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <LinearGradient
            colors={['#3498db', '#8e44ad']}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.noteView}>
            <Text style={styles.text}>ADD NOTES</Text>
            <IonIcon
              name="arrow-forward-circle-outline"
              onPress={onAdd}
              style={styles.icon}
              size={50}
            />
          </LinearGradient>
        </View>

        <View style={styles.button}>
          <LinearGradient
            colors={['#3498db', '#8e44ad']}
            style={styles.noteView}>
            <Text style={styles.text}>VIEW NOTES</Text>
            <IonIcon
              name="arrow-forward-circle-outline"
              onPress={onView}
              style={styles.icon}
              size={50}
            />
          </LinearGradient>
        </View>
        <View style={styles.button}>
          <LinearGradient
            colors={['#3498db', '#8e44ad']}
            style={styles.noteView}>
            <Text style={styles.text}>DELETE NOTES</Text>
            <IonIcon
              name="arrow-forward-circle-outline"
              onPress={onDelete}
              style={styles.icon}
              size={50}
            />
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  noteView: {
    width: Dimensions.get('window').width - 100,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  icon: {
    marginTop: 10,
  },
  button: {
    width: Dimensions.get('window').width - 100,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
  },
  delete: {},
  container: {
    alignItems: 'center',
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'lightblue',
  },
  text: {
    color: 'black',
    fontSize: 28,
    fontWeight: '400',
  },
});
