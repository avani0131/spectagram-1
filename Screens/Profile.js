import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is [Your Name].</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: 'black'
  }
});

export default ProfileText;