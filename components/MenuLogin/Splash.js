import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Setelah beberapa detik, navigasikan ke layar berikutnya
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Ganti 'Main' dengan nama layar berikutnya
    }, 2000); // Ganti 3000 dengan durasi tampilan splash screen dalam milidetik

    // Bersihkan timeout saat komponen dibongkar
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/LOGO.png')} // Ganti dengan path logo Anda
        style={styles.logo}
      />
      <Text style={styles.text}>Turbo Fit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Ganti dengan warna latar belakang yang diinginkan
  },
  logo: {
    width: 300,
    height: 150,
    marginBottom: 209,
    resizeMode: 'contain',
  },
  text: {
    position: 'absolute',
    bottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C43BE',
  },
});

export default SplashScreen;
