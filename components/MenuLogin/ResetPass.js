import { Image,View, Text, Button, StyleSheet, Linking,TouchableOpacity  } from 'react-native';
import {SafeAreaView, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import React from 'react';

export default function ResetPass () {

const navigation = useNavigation();

const [input1, text1] = React.useState('');
const [input2, text2] = React.useState('');

const handlePress = () => {
  navigation.navigate('ResetPass2');
};

const login = () => {
  navigation.navigate('Login');
};


  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/resetapasswordlogo.png')} />
      <View style={styles.halfBackground} />

      <Text style={styles.text1}> Reset Your Password </Text>
      <Text style={styles.text2}> Jangan khawatir, tolong masukkan email  </Text>
      <Text style={styles.text2}> yang Anda pakai pada akun  </Text>.

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={input1}
        onChangeText={text1}
        underlineColorAndroid="transparent"
      />

      <Text style={styles.register } onPress={handlePress}>
        Use phone number?{' '}
      </Text>
    
      <TouchableOpacity
        onPress={login} 
        activeOpacity={0.7}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FDFDFD',
  },

  text1:{
    fontWeight: 'bold',
    fontSize: 25,
    textalign: "center",
    marginTop: 5,
    marginBottom: 0,
    color:"#B6B6B6",
  },

  text2:{
    fontWeight: 'bold',
    fontSize: 12,
    textalign: "center",
    marginTop: 5,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 0,
    color:"#B6B6B6",
  },

    logo:{
    position: 'relative',
    zIndex: 2,
    height : 200,
    width : 140,
    marginTop: 0,
    marginBottom: 30,
  },

  register:{
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    marginBottom:80,
    textDecorationLine: 'underline',
    color: "#2196F3",
  },

  input:{
    position: 'relative',
    height : 40,
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
    marginTop: 10,
    marginBottom: 0,
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