import { Image,View, Text, Button, StyleSheet, Linking,TouchableOpacity  } from 'react-native';
import {SafeAreaView, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';

import React, { useState,useEffect } from 'react';
import { firebaseauth } from '../FIrebase/firebase';

export default function Login () {

const auth = firebaseauth;

const navigation = useNavigation();

const [email, onChangeEmail] = useState();
const [password, onChangeNumber] = useState();
const [user, setUser] = useState(null);
const [isLogin, setIsLogin] = useState(true);

const handleAuthentication = async () => {
    try {
      if (user) {
        // If user is already authenticated, log out
        console.log('User logged out successfully!');
        await signOut(auth);
      } else {
        // Sign in or sign up
        if (isLogin) {
          // Sign in
          await signInWithEmailAndPassword(auth, email, password);
          console.log('User signed in successfully!');
          navigation.navigate('Dashboard');
        } 
        
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

const handlePress = () => {
  navigation.navigate('Dashboard');
};

const login = () => {
  navigation.navigate('Register');
};

const ResetPass = () => {
  navigation.navigate('ResetPass');
};


  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/LOGO.png')} />
      <View style={styles.halfBackground} />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={onChangeEmail}
        underlineColorAndroid="transparent"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={onChangeNumber}
        secureTextEntry={true}
        underlineColorAndroid="transparent"
      />

      <TouchableOpacity
        onPress={handleAuthentication}
        activeOpacity={0.7}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.pass} onPress={ResetPass}> Forgot Password? </Text>
      <Text style={styles.register } onPress={login}>
        Don’t have an Account?{' '}
        <Text style={{ color: 'white'}}>
          Sign Up Here
        </Text>{' '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#2B45CB',
  },

  halfBackground: {
    position: 'absolute',
    top : 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FDFDFD',
    height:359,
    borderBottomLeftRadius: 30, // Half of the height
    borderBottomRightRadius: 30, // Half of the height
    shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOpacity: 2,
        shadowRadius: 4,
        shadowOffset: {
          width: 1,
          height: 2,
        },
  },

  pass:{
    fontWeight: 'bold',
    marginLeft: 170,
    fontSize: 13,
    textAlign: "right",
    marginTop: 5,
    marginBottom: 15,
    color:"#FDFDFD",
  },
    logo:{
    position: 'relative',
    zIndex: 2,
    height : 120,
    width : 150,
    marginTop: 0,
    marginBottom: 60,
  },

  register:{
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:100,
    marginBottom:10,
    color: "#2196F3",
  },

  input:{
    position: 'relative',
    height: 40,
    width: 270,
    fontWeight: 'bold',
    borderColor: 'grey',
    backgroundColor: 'white',
    color: "#B4B4B3",
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 0,
    marginBottom: 30,
    elevation: 5, // Tambahkan properti elevation untuk bayangan
  },
  

  button: {
    // Menyesuaikan lebar dan tinggi tombol
    height : 40,
    width : 270,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    // Menghilangkan border sepenuhnya
    borderWidth: 0,
    borderColor: 'transparent',
    paddingLeft: 10,
    marginBottom: 1,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOpacity: 2,
        shadowRadius: 4,
        shadowOffset: {
          width: -1,
          height: 2,
        },
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});