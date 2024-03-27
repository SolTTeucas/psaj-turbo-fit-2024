import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Impor fungsi navigasi yang diperlukan

export default function Explore() {
  const navigation = useNavigation(); // Inisialisasi navigasi

  // Handler untuk menangani klik pada teks "Premium2"
  const handlePremium2Press = () => {
    // Navigasi ke halaman setting (ganti 'SettingsScreen' dengan nama halaman setting sesuai dengan aplikasi Anda)
    navigation.navigate('Details');
  };

  // Handler untuk menangani klik pada teks "Back"
  // const handleProfilePress = () => {
  //   // Navigasi ke halaman setting (ganti 'SettingsScreen' dengan nama halaman setting sesuai dengan aplikasi Anda)
  //   navigation.navigate('Profile');
  // };
  const Profile = () => {
    navigation.navigate('Profile');
  };

  const Dashboard = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.touchable} onPress={handlePremium2Press}>
          <Text style={styles.touchableText}>Upload</Text>
        </TouchableOpacity>
      
        {/* Form Input */}
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="Search Videos" />
          {/* Tambahkan input lainnya sesuai kebutuhan */}
        </View>
        <Image style={styles.settingIconProfile} source={require('../../assets/profile2.jpeg')} />
        
      </View>

      {/* Konten */}
      <View style={styles.content}>
        <View style={{flexDirection: 'row', marginTop: 320,}}>
          <Text style={styles.labelBelow}>Arm Workout</Text>
          <Text style={styles.labelBelow}>Chest Workout</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.labelBelow2}>ABS Workout</Text>
          <Text style={styles.labelBelow}>Fitnes</Text>
        </View>

        <Text style={styles.text}>POPULAR</Text>
        
        <Image style={styles.tutorial} source={require('../../assets/video-1.png')} />
        <View style={{flex: 1, alignItems: 'flex-start'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.profileUser} source={require('../../assets/profile2.jpeg')} />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.title}>How to correctly train your ABS</Text>
              {/* Tambahkan teks tambahan di bawah judul di sini */}
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.chanel}>Mr.Sigma123</Text>
                <Text style={styles.views}>8k Views</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.NavbarSquare}>
        <View style={styles.NavbarContainer}>
          <TouchableOpacity onPress={Dashboard}>
          <View style={styles.NavbarItems}>
            <Image style={styles.HomeButton} resizeMode= "contain" source={require('../../assets/homeB.png')}/>
            <Text style={styles.ButtonDetailsGrey}>Home</Text>
          </View>
          </TouchableOpacity>
          
          {/* <View style={styles.NavbarItems2}>
            <Image style={styles.ReportButton} resizeMode= "contain" source={require('../../assets/reportB.png')}/>
            <Text style={styles.ButtonDetailsGrey}>Report</Text>
          </View> */}
          <View style={styles.NavbarItems2}>
            <Image style={styles.ExploreButton} resizeMode="contain" source={require('../../assets/exploreBl.png')}/>
            <Text style={styles.ButtonDetails}>Explore</Text>
          </View>
          <TouchableOpacity onPress={Profile}>
          <View style={styles.NavbarItems2}>
            <Image style={styles.ProfileButton} resizeMode="contain" source={require('../../assets/profileB.png')}/>
            <Text style={styles.ButtonDetailsGrey}>Profile</Text>
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
    width: '100%',
    height: 70,
    backgroundColor: '#ffff',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 5,
    position: 'absolute',
    top: 50,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 130,
  },
  settingIconProfile: {
    width: 44,
    height: 44,
    borderRadius: 50,
  },
  content: {
    top: -180,
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  NavbarContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10, // Mengurangi margin top agar navbar turun sedikit
  },
  
  NavbarItems:{
    flexDirection: 'column',
    alignItems: 'center',
    margin: 30,
  },

    NavbarItems2:{
    flexDirection: 'column',
    alignItems: 'center',
    margin: 30,
  },
  HomeButton:{
    width: 28,
  },
  ReportButton:{
    width: 28,
  },
  ExploreButton:{
    width:28,
    marginTop:6,
  },
  ExploreButton2:{
    width:28,
    marginTop:6,
  },
  ButtonDetails:{
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'left',
    color: '#387ADF',
  },
  ButtonDetailsGrey:{
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'left',
    color: '#616161',
  },

  touchable: {
    backgroundColor: '#2C43BE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: 100,
    height: 48,
    
  },
  touchableText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  formContainer: {
    width: 178,
    height: 60,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#EDECEE',
    borderColor: '#ccc',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 8,
  },
  labelBelow: {
    marginTop: 4, // Add some space between the element and its label
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#387ADF',
    width: 165,
    height: 50,
    borderRadius: 6,
    textAlign: 'center', // Centers the text horizontally within its container
    justifyContent: 'center', // If you use this style directly on a View, it helps to center its children
    lineHeight: 50, // Vertically center the text within its container (since height is 50)
    color: '#387ADF',
    margin: 10,
  },
  labelBelow2: {
    marginTop: 4, // Add some space between the element and its label
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#387ADF',
    width: 165,
    height: 50,
    borderRadius: 6,
    textAlign: 'center', // Centers the text horizontally within its container
    justifyContent: 'center', // If you use this style directly on a View, it helps to center its children
    lineHeight: 50, // Vertically center the text within its container (since height is 50)
    color: '#ffff',
    backgroundColor: '#387ADF',
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start', // Aligns the text to the left side of its parent container
    marginLeft: 10, 
    marginTop: 30,
    marginBottom: 20, 
  },  
  tutorial:{
    width: 340,
    height: 200,
    borderRadius: 10,
  },
  profileUser: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginTop: 10,
    alignSelf: 'flex-start', // Aligns the text to the left side of its parent container
    marginLeft: -10,
    marginRight: 10, 
  },
  title: {
    fontSize: 15,
    marginTop: 0,
  },
  chanel: {
    fontSize: 12, // Atau ukuran yang sesuai
    color: '#666', // Warna teks, sesuaikan sesuai kebutuhan
    marginTop: 5, // Jarak antara judul dan chanel
    marginRight: 20,
  }, 
  views:{
    fontSize: 13, // Atau ukuran yang sesuai
    color: '#666', // Warna teks, sesuaikan sesuai kebutuhan
  }, 
});
