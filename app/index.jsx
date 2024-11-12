import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text className="text-3xl font-u_regular">Log in</Text>
      
      <View style={styles.signupContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity style={styles.signupButton}>
          <Link href="/signup">
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </Link>
        </TouchableOpacity>
      </View>

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
      
      <Link href="/Home" style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </Link>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6B783F',
  },
  signupContainer: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center',  // Center vertically
    marginVertical: 10,    // Space above and below
  },
  input: {
    width: 290,
    height: 50,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
  signupButton: {
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    padding: 3,
    marginLeft: 5, // Space between text and button
  },
  signupButtonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
