import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Impor fungsi navigasi yang diperlukan

export default function Setting() {
  const navigation = useNavigation(); // Inisialisasi navigasi

  // Handler untuk menangani klik pada tombol "Back"
  const handleBackPress = () => {
    // Navigasi ke halaman edit (ganti 'EditScreen' dengan nama halaman edit sesuai dengan aplikasi Anda)
    navigation.navigate('Profile');
  };

  // Handler untuk menangani klik pada tombol "LogOut"
  const handleLogOutPress = () => {
    // Navigasi ke halaman edit (ganti 'EditScreen' dengan nama halaman edit sesuai dengan aplikasi Anda)
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.settingIconProfile} source={require('../../assets/back.png')} />
          <Text style={styles.headerText}>Settings</Text>
        </TouchableOpacity>
      </View>
      {/* Konten */}
      <View style={styles.content}>
        {/* Isi konten diletakkan di sini */}
        <View style={styles.settingContainer}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingText}>Ethan Winters</Text>
            <Text style={styles.secondaryText}>Sign in and synchronize your data</Text>
          </View>
          <Image style={styles.settingIcon} source={require('../../assets/profile2.jpeg')} /> 
        </View>

        {/* Menu Pilihan */}
        <Text style={styles.textWo}>WORKOUT</Text>

        <View style={styles.menuItem}>
          <View style={styles.menuContent}>
            <Image style={styles.menuIcon} source={require('../../assets/user.png')} />
            <Text style={styles.menuText}>Gender</Text>
          </View>
        </View>
        <View style={styles.menuItem}>
          <View style={styles.menuContent}>
            <Image style={styles.menuIcon} source={require('../../assets/cup.png')} />
            <Text style={styles.menuText}>Training Rest</Text>
            <Text style={styles.menuText2}>25 secs</Text>
            <Image style={styles.menuIcon2} source={require('../../assets/down.png')} />
          </View>
        </View>
        <View style={styles.menuItem}>
          <View style={styles.menuContent}>
            <Image style={styles.menuIcon} source={require('../../assets/time.png')} />
            <Text style={styles.menuText}>Countdown Time</Text>
            <Text style={styles.menuText3}>15 secs</Text>
            <Image style={styles.menuIcon2} source={require('../../assets/down.png')} />
          </View>
        </View>
        <View style={styles.menuItem}>
          <View style={styles.menuContent}>
            <Image style={styles.menuIcon} source={require('../../assets/sound.png')} />
            <Text style={styles.menuText}>Sound Option</Text>
          </View>
        </View>
        <View style={styles.menuItem}>
          <View style={styles.menuContent}>
            <Image style={styles.menuIcon} source={require('../../assets/restart.png')} />
            <Text style={styles.menuText}>Restart Progress</Text>
          </View>
        </View>
        <View style={styles.menuItem2}>
          <TouchableOpacity onPress={handleLogOutPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.menuContent}>
              <Image style={styles.menuIcon} source={require('../../assets/exit.png')} />
              <Text style={styles.menuText}>Log out</Text>
            </View>

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
    backgroundColor: '#2C43BE', 
    justifyContent: 'center', 
    alignItems: 'center', 
    zIndex: 5, 
    position: 'absolute', 
    top: 0, 
  },
  headerText: {
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginLeft: 10, 
    marginRight: 200,
  },
  settingIconProfile: {
    width: 30,
    height: 25,
    marginRight: 10,
    marginLeft: -10,
  },
  content: {
    marginTop: 70, 
    flex: 1, 
    width: '100%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWo: {
    color: '#387ADF',
    fontSize: 14,
    // fontWeight: 'bold',
    marginLeft: -250,
  },
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: -100,
  },
  settingInfo: {
    marginRight: 30,
  },
  settingIcon: {
    width: 85,
    height: 85,
    zIndex: 10, 
    borderRadius: 500,
  },
  settingText: {
    fontSize: 24,
    fontWeight: 'bold',
    zIndex: 10, 
  },
  secondaryText: {
    fontSize: 14,
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    marginTop: 20,
    marginLeft:15, 
    width: 306,
  },
  menuItem2: {
    padding: 10,
    marginTop: 20,
    marginLeft:15, 
    width: 306,
  },
  menuContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 20,
  },
  menuIcon2: {
    width: 15,
    height: 15,
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuText2: {
    fontSize: 11,
    fontWeight: 'bold',
    marginLeft: 80,
    color:'#387ADF',
  },
  menuText3: {
    fontSize: 11,
    fontWeight: 'bold',
    marginLeft: 57,
    color:'#387ADF',
  },
});
