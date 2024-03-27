import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Impor fungsi navigasi yang diperlukan

export default function Profile() {
  const navigation = useNavigation(); // Inisialisasi navigasi

  // Handler untuk menangani klik pada teks "Premium"
  const handlePremiumPress = () => {
    // Navigasi ke halaman setting (ganti 'SettingsScreen' dengan nama halaman setting sesuai dengan aplikasi Anda)
    navigation.navigate('Setting');
  };

  // Handler untuk menangani klik pada tombol "Edit"
  const handleEditPress = () => {
    // Navigasi ke halaman edit (ganti 'EditScreen' dengan nama halaman edit sesuai dengan aplikasi Anda)
    navigation.navigate('Edit');
  };

  // Handler untuk menangani klik pada tombol "Edit"
  const handlePremium1Press = () => {
    // Navigasi ke halaman edit (ganti 'EditScreen' dengan nama halaman edit sesuai dengan aplikasi Anda)
    navigation.navigate('Premium1');
  };

  const Back = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={Back}>
          <Image style={styles.settingIconProfile} source={require('../../assets/back.png')} />
        </TouchableOpacity>
        
        <Text style={styles.headerText}>My Profile</Text>
      </View>
      {/* Penempatan halfBackground agar tidak menutupi logo dan images */}
      <View style={styles.halfBackground} />
      
      {/* Container untuk logo dan images untuk mempermudah pengaturan posisi relatif */}
      <View style={styles.content}>
      <Text style={styles.profile}>Ethan Winters</Text>
      <View style={styles.profileEditContainer}>
        <TouchableOpacity onPress={handleEditPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.profileEdit}>Edit</Text>
          <Image style={styles.editIcon} source={require('../../assets/pen.png')} />
        </TouchableOpacity>
      </View>

        <Image style={styles.logo} source={require('../../assets/profile2.jpeg')} />
        <View style={styles.imagesContainer}>
          <View style={styles.imageWithText}>
            <Image style={styles.logo2} source={require('../../assets/drink.png')} />
            <Text style={styles.imageText}>Drink Water</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.imageText2, {color: '#387ADF'}]}>250 ml</Text>
              <Text style={[styles.imageText2, {color: 'black'}]}> | 56%</Text>
            </View>
          </View>
          <View style={styles.imageWithText}>
            <Image style={styles.logo2} source={require('../../assets/heart.png')} />
            <Text style={styles.imageText}>Health</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.imageText2, {color: '#387ADF'}]}>Good</Text>
              <Text style={[styles.imageText2, {color: 'black'}]}> | 85%</Text>
            </View>
          </View>
          <View style={styles.imageWithText}>
            <Image style={styles.logo2} source={require('../../assets/colestrol.png')} />
            <Text style={styles.imageText}>Colestrol</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.imageText2, {color: '#387ADF'}]}>Normal</Text>
              <Text style={[styles.imageText2, {color: 'black'}]}> | 178 LDL</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.settingContainer}>
            <TouchableOpacity onPress={handlePremiumPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={styles.settingIcon} source={require('../../assets/setting.png')} />
              <Text style={styles.settingText}>Setting</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePremium1Press} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={styles.settingIcon2} source={require('../../assets/diamond.png')} />
              <Text style={styles.settingText}>Premium</Text>
            </TouchableOpacity>
            
          </View>
          
          <View style={styles.settingContainer2}>
            <Image style={styles.settingIcon} source={require('../../assets/list.png')} />
            <Text style={styles.settingText}>Data Activity</Text>
            <Image style={styles.settingIcon3} source={require('../../assets/help.png')} />
            <Text style={styles.settingText}>Help & Service</Text>
          </View>
          <View style={styles.settingContainer2}>
            <Image style={styles.settingIcon} source={require('../../assets/youtube.png')} />
            <Text style={styles.settingText}>Your Chanel</Text>
          </View>
          
        </View>
        <View style={styles.card2}>
          <View style={styles.settingContainer}>
            <Image style={styles.settingIcon} source={require('../../assets/bar.png')} />
            <Text style={styles.settingText2}>Your Balance</Text>
            <View style={styles.idrContainer}>
              <Text style={styles.settingText3}>IDR 2.730.000,00</Text>
            </View>
          </View>
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
  halfBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 270,
    backgroundColor: '#2C43BE',
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 500,
    zIndex: 1, // Pastikan berada di bawah logo
  },
  header: {
    flexDirection: 'row', // membuat gambar 'back' dan teks 'My Profile' bersebelahan
    width: 400,
    height: 60, // Tinggi header
    backgroundColor: '#2C43BE', // Warna latar header
    justifyContent: 'center', // Menyelaraskan item (dalam hal ini, teks) secara vertikal di tengah
    alignItems: 'center', // Menyelaraskan item secara horizontal di tengah
    zIndex: 5, // Memastikan header berada di atas elemen lain
  },
  headerText: {
    color: 'white', // Warna teks
    fontSize: 20, // Ukuran font teks
    fontWeight: 'bold', // Ketebalan font
    marginLeft: 20, // Memberikan sedikit jarak antara gambar 'back' dan teks
    marginRight: 160,
  },
  profile:{
    position: 'absolute', // Make text absolute to allow precise positioning
    color: '#ffff',
    fontSize: 18,
    fontWeight: 'bold',
    top: '3%', // Adjust this value as needed to position the text above the image
    zIndex: 4, // Ensure the text appears above the image
  },
  profileEditContainer: {
    flexDirection: 'row', // Menyusun item-item secara horizontal
    alignItems: 'center', // Menyelaraskan item-item di tengah secara vertikal
    justifyContent: 'center', // Menyelaraskan item-item di tengah secara horizontal
    position: 'absolute', // Positioning agar dapat ditempatkan dengan lebih fleksibel
    top: '7%', // Atur posisi vertikal sesuai kebutuhan
    left: 0,
    right: 0,
    zIndex: 4, // Pastikan elemen ini berada di atas elemen lainnya
  },  
  
  profileEdit: {
    color: '#ffff',
    fontSize: 14,
    marginRight: 5, // Tambahkan sedikit ruang antara teks dan gambar pensil
  },
  
  editIcon: {
    width: 14, // Sesuaikan ukuran gambar pensil sesuai kebutuhan
    height: 14, // Sesuaikan ukuran gambar pensil sesuai kebutuhan
  }, 
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    zIndex: 2, // Memastikan konten ini (termasuk logo) berada di atas background
  },
  logo: {
    position: 'absolute',
    width: 150,
    height: 150,
    top: '13%', // Menyesuaikan berdasarkan kebutuhan
    zIndex: 3, // Membuat logo berada di paling atas
    borderRadius: 500,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    top: '43%', // Menyesuaikan berdasarkan kebutuhan
    zIndex: 2, // Memastikan ini berada di bawah logo tetapi di atas background
  },
  logo2: {
    width: 50,
    height: 50,
  },
  logo3: {
    width: 20,
    height: 20,
  },
  imageWithText: {
    alignItems: 'center',
  },
  imageText: {
    marginTop: 5,
  },
  imageText2: {
    marginTop: 5,
    fontSize: 12,
  },
  card:{
    top: '25%', // Menyesuaikan berdasarkan kebutuhan
    width: 314,
    height: 147,
    borderWidth: 1.7,
    borderColor: '#387ADF',
    borderRadius: 20,
    padding: 10,
  },
  card2:{
    top: '30%', // Menyesuaikan berdasarkan kebutuhan
    width: 314,
    height: 48,
    borderWidth: 1.7,
    borderColor: '#387ADF',
    borderRadius: 20,
    padding: 10,
  },
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  settingIconProfile: {
    width: 30,
    height: 25,
    marginRight: 10,
    marginLeft: -20,
  },
  settingIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  settingIcon2: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginLeft: 70,
  },
  settingIcon3: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginLeft: 25,
  },
  settingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  settingText2: {
    fontSize: 16,
    marginTop: -15,
    fontWeight: 'bold',
  },
  settingText3: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  idrContainer: {
    position: 'absolute',
    bottom: -9,
    left: 30, // Sesuaikan dengan kebutuhan
  },
});
