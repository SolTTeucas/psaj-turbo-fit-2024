import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Premium3() {
  const navigation = useNavigation();

  const handleConfirmPress = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Advertisement</Text>
      </View>

      <Image style={styles.logo} source={require('../../assets/congrats.png')} />

      <Text style={styles.cardTitle}>Your Payment Successful!</Text>

      <Text style={styles.cardDescription}>We have received your payment request and the benefits will be sent to your account. You will receive this payment notification message.</Text>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPress}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
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
  header: {
    flexDirection: 'row',
    width: 400,
    height: 70,
    backgroundColor: '#2C43BE',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
    position: 'absolute',
    top: 0,
  },
  headerText: {
    color: '#FFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 80,
  },
  logo: {
    position: 'absolute',
    width: 285,
    height: 235,
    top: '13%', // Menyesuaikan berdasarkan kebutuhan
    zIndex: 3, // Membuat logo berada di paling atas
    borderRadius: 50,
  },
  cardDescription: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
    color: '#BEBEBE',
    marginTop: 20,
  },
  confirmButton: {
    backgroundColor: '#2C43BE',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 50,
    justifyContent: 'center', // Align text horizontally
    alignItems: 'center', // Align text vertically
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
