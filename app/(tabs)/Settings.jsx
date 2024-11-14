// App.js
import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const SettingsPage = ({ navigation }) => {

  const handlePress = (section) => {
    // Log the section that was pressed
    Alert.alert(`${section} Button Pressed`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.buttonContainer}>
        <Button title="Personal Info" onPress={() => handlePress('Info')} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Security" onPress={() => handlePress('Security')} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Terms of Service" onPress={() => handlePress('Personal Info')} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="About Us" onPress={() => handlePress('About Us')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
    
    
  },
});

export default SettingsPage;
