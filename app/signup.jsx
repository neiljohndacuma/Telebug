import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder='Email...'
        keyboardType='email-address'
        autoCapitalize='none'
        textContentType='emailAddress'
      />
      <TextInput
        style={styles.input}
        placeholder='Password...'
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder='Confirm Password...'
        secureTextEntry={true}
      />
      
      <Link href="/Home" style={styles.link}>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Create Account</Text>
        </TouchableOpacity>
      </Link>

      <Text style={styles.footerText}>
        Already have an account? <Link href="/">Log in</Link>
      </Text>
    </View>
  );
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6B783F',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  signupButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
  },
  signupButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footerText: {
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
  },
});
