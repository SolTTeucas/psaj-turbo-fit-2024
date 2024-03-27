import { Image,View, Text, Button, StyleSheet, Linking,TouchableOpacity  } from 'react-native';
import {SafeAreaView, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomTabNavigator from '../Navbar/BottomNav';

export default function Login () {
const [input1, text1] = React.useState('');
const [input2, text2] = React.useState('');
const [input3, text3] = React.useState('');
const [input4, text4] = React.useState('');
const [input5, text5] = React.useState('');

const handlePress = () => {
    // Aksi yang dijalankan saat tombol disentuh
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Do live training in your own</Text>
      <Text style={styles.textinput1}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="enter your name"
        value={input1}
        onChangeText={text1}
        underlineColorAndroid="transparent"
      />
      <Text style={styles.textinput2}>Trainer's Name</Text>
      <TextInput
        style={styles.input}
        placeholder="enter your trainer's name"
        value={input2}
        secureTextEntry={true}
        onChangeText={text2}
        underlineColorAndroid="transparent"
      />

      <Text style={styles.textinput3}>Date</Text>
      <TextInput
        style={styles.input}
        placeholder="DD/MM/YY"
        value={input3}
        secureTextEntry={true}
        onChangeText={text3}
        underlineColorAndroid="transparent"
      />

      <Text style={styles.textinput4}>Time</Text>
      <TextInput
        style={styles.input}
        placeholder="PM/AM"
        value={input4}
        secureTextEntry={true}
        onChangeText={text4}
        underlineColorAndroid="transparent"
      />

      <Text style={styles.textinput5}>Place</Text>
      <TextInput
        style={styles.input}
        placeholder="enter your location"
        value={input5}
        secureTextEntry={true}
        onChangeText={text5}
        underlineColorAndroid="transparent"
      />

      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Start The Meeting</Text>
      </TouchableOpacity>

      <Text style={styles.pass}> </Text>
      <Text style={styles.register}>
        Already have an Account?{' '}
        <Text style={{ color: 'white' }}>
          Login Here
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
    marginTop: 40,
    backgroundColor: 'white',
  },
  text:{
    position: 'relative',
    flex: 2,
    fontWeight: 'bold',
    marginLeft: -60,
    fontSize: 16,
    textAlign: "left",
    marginTop: 5,
    marginBottom: 20,
    color:"#9E9E9E",
  },

  textinput1:{
    fontWeight: '600',
    marginLeft: -220,
    fontSize: 16,
    marginTop: 0,
    marginBottom: 8,
    color:"#2C43BE",
  },

   textinput2:{
    fontWeight: '600',
    marginLeft: -160,
    fontSize: 16,
    marginTop: 0,
    marginBottom: 8,
    color:"#2C43BE",
  },

   textinput3:{
    fontWeight: '600',
    marginLeft: -230,
    fontSize: 16,
    marginTop: 0,
    marginBottom: 8,
    color:"#2C43BE",
  },

   textinput4:{
    fontWeight: '600',
    marginLeft: -230,
    fontSize: 16,
    marginTop: 0,
    marginBottom: 8,
    color:"#2C43BE",
  },

   textinput5:{
    fontWeight: '600',
    marginLeft: -225,
    fontSize: 16,
    marginTop: 0,
    marginBottom: 8,
    color:"#2C43BE",
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
    height : 35,
    width : 270,
    fontWeight: 'bold',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    color: "#B4B4B3",
    borderRadius: 10,
    // Menghilangkan border sepenuhnya
    borderWidth: 0,
    borderColor: 'transparent',
    paddingLeft: 10,
    marginBottom: 15,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOpacity: 1.5,
        shadowRadius: 5,
        shadowOffset: {
          width: 0,
          height: 2,
        },
    padding: 5,
  },

  button: {
    // Menyesuaikan lebar dan tinggi tombol
    height : 30,
    width : 270,
    backgroundColor: '#2C43BE',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    // Menghilangkan border sepenuhnya
    borderWidth: 0,
    borderColor: 'transparent',
    paddingLeft: 10,
    marginBottom: 1,
    marginTop: 20,
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
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});