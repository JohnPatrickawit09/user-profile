import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaa" secureTextEntry />
      <CustomButton title="Login" onPress={() => navigation.navigate('Profile')} />
      <CustomButton title="Register" onPress={() => navigation.navigate('Register')} />
      <TouchableOpacity onPress={() => navigation.navigate('PasswordRecovery')}>
        <Text style={styles.recoveryText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaa" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="#aaa" secureTextEntry />
      <CustomButton title="Sign Up" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

function PasswordRecoveryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password Recovery</Text>
      <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="#aaa" />
      <CustomButton title="Send Recovery Email" onPress={() => {}} />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  const userData = {
    name: "John Patrick S. Awit",
    email: "awitjohnpatrick@gmail.com",
    profilePicture: require('./assets/MyImage.png'),
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Image source={userData.profilePicture} style={styles.profileImage} />
      <Text style={styles.userInfo}>Name: {userData.name}</Text>
      <Text style={styles.userInfo}>Email: {userData.email}</Text>
      <CustomButton title="Home" onPress={() => navigation.navigate('Home')} />
      <CustomButton title="Settings" onPress={() => navigation.navigate('Settings')} />
      <CustomButton title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text>Settings options go here.</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text>Welcome to the home screen!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7ece8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    width: '80%',
    color: '#333',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#14e3dc',
  },
  userInfo: {
    fontSize: 18,
    color: '#555',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#14e3dc',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  recoveryText: {
    color: '#4e9bde',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

