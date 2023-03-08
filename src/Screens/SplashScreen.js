import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import splash from '../../assets/img/splash.jpg';
import splashVideo from '../../assets/video/splashvideo.mp4';
import VideoPlayer from 'react-native-video-player';
import LinearGradient from 'react-native-linear-gradient';
const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#3498db', '#8e44ad']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.splashContainer}>
          <View
            style={{
              width: Dimensions.get('window').width - 100,
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 20,
            }}>
            <View style={styles.componentContainer}>
              <Text style={styles.header}>NOTE APP</Text>
            </View>
            <View style={styles.componentContainer}>
              <Image source={splash} style={styles.image} />
            </View>
            <View style={styles.componentContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>SKIP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexGrow: 1,
  },
  splashContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  componentContainer: {
    flexGrow: 1,
    margin: 20,
    width: Dimensions.get('window').width - 100,
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width - 100,
    height: '75%',
    resizeMode: 'contain',
    margin: 10,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
  header: {
    fontSize: 36,
    color: 'white',
    fontWeight: '700',
  },
});
