import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const Header = ({heading}) => {
  return (
    <View
      style={{
        width: '100%',
      }}>
      <Text
        style={{
          marginTop: 8,
          color: 'black',
          alignSelf: 'center',
          fontSize: 26,
          padding: 6,
          fontWeight: '900',
        }}>
        {heading}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
