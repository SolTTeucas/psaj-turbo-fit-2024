import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Impor fungsi navigasi yang diperlukan

export default function Edit() {
  const navigation = useNavigation(); // Inisialisasi navigasi

  // Handler untuk menangani klik pada tombol "Back"
  const handleBackPress = () => {
    // Navigasi ke halaman edit (ganti 'EditScreen' dengan nama halaman edit sesuai dengan aplikasi Anda)
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.settingIconProfile} source={require('../../assets/back2.png')} />
          <Text style={styles.headerText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      {/* Konten */}
      <View style={styles.content}>
        {/* Isi konten diletakkan di sini */}
        <Image style={styles.logo} source={require('../../assets/profile2.jpeg')} />

        <Image style={styles.menuIcon2} source={require('../../assets/edit.png')} />

        <Text style={styles.text}>Username</Text>
        <View style={styles.menuItem}>
          <View style={styles.menuContent}>
            <Text style={styles.menuText}>Ethan Winters</Text>
            <Image style={styles.menuIcon} source={require('../../assets/penB.png')} />
          </View>
        </View>
        <Text style={styles.text2}>Email</Text>
        <View style={styles.menuItem}>
          <View style={styles.menuContent}>
            <Text style={styles.menuText}>ethanwntr9@gmail.com</Text>
            <Image style={styles.menuIcon} source={require('../../assets/penB.png')} />
          </View>
        </View>
        <Text style={styles.text3}>Password</Text>
        <View style={styles.menuItem}>
          <View style={styles.menuContent}>
            <Text style={styles.menuText}>*************</Text>
            <Image style={styles.menuIcon} source={require('../../assets/penB.png')} />
          </View>
        </View>

        {/* Tombol Cancel dan Save */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.cancelButton]}>
            <Text style={styles.buttonCancel}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.saveButton]}>
            <Text style={styles.buttonSave}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
    position: 'absolute',
    top: 0,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10, 
    marginRight: 200,
  },
  settingIconProfile: {
    width: 30,
    height: 25,
    marginRight: 10,
  },
  content: {
    marginTop: 70,
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    width: 150,
    height: 150,
    top: '3%', // Menyesuaikan berdasarkan kebutuhan
    zIndex: 3, // Membuat logo berada di paling atas
    borderRadius: 500,
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    marginLeft: 15,
    width: 306,
  },
  menuContent: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Menjadikan elemen berada di antara dua ujung kontainer
    alignItems: 'center',
  },
  menuIcon: {
    width: 14,
    height: 14,
  },
  menuIcon2: {
    width: 24,
    height: 24,
    marginTop: 70,
  },
  menuText: {
    fontSize: 18,
    // fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: -200,
    marginTop: 80,
  },
  text2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: -235,
    marginTop: 30,
  },
  text3: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: -205,
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButton: {
    width: 119,
    height: 50,
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderRadius: 30,
    marginRight: 10,
  },
  saveButton: {
    width: 119,
    height: 50,
    backgroundColor: '#387ADF',
    borderRadius: 30,
    marginLeft: 10,
  },
  buttonCancel: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSave: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
