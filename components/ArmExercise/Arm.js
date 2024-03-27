import React from 'react';
import { Text, SafeAreaView, StyleSheet,View,Image,TextInput,Pressable, ScrollView, TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Impor fungsi navigasi yang diperlukan

export default function Arm() {
  const navigation = useNavigation(); // Inisialisasi navigasi

  // Handler untuk menangani klik pada teks "Premium2"
  const Back = () => {
    // Navigasi ke halaman setting (ganti 'SettingsScreen' dengan nama halaman setting sesuai dengan aplikasi Anda)
    navigation.navigate('Dashboard');
  };

  const Dashboard = () => {
    // Navigasi ke halaman setting (ganti 'SettingsScreen' dengan nama halaman setting sesuai dengan aplikasi Anda)
    navigation.navigate('Dashboard');
  };

  const Explore = () => {
    // Navigasi ke halaman setting (ganti 'SettingsScreen' dengan nama halaman setting sesuai dengan aplikasi Anda)
    navigation.navigate('Explore');
  };

  const Profile = () => {
    // Navigasi ke halaman setting (ganti 'SettingsScreen' dengan nama halaman setting sesuai dengan aplikasi Anda)
    navigation.navigate('Profile');
  };

  return(
    <SafeAreaView style={styles.Container}>
      <View style={styles.BannerSquare}></View>

      <View style={styles.HeaderContainer}>
        <TouchableOpacity onPress={Back}>
          <Image style={styles.Backbutton} source={require('./back-button.png')}/>
        </TouchableOpacity>
        
        <Text style={styles.Header1}>Your Weekly Progress</Text>
      </View>

      <Text style={styles.Title}>ARM EXERCISE</Text>
      <View style={styles.SubtitleContainer}>
        <Text style={styles.Subtitle}>1200.51 kcal</Text>
        <Image style={styles.CalPict} source={require('./cal-pict.png')}/>
        <Text style={styles.Subtitle2}> | </Text>
        <Text style={styles.Subtitle3}>460 ml</Text>
        <Image style={styles.WatPict} source={require('./wat-pict.png')}/>
      </View>

      <Image style={styles.BanPict} source={require('./ban-pict.png')}/>

      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.WorkoutButton} onPress = {()=> navigation.navigate('Arm')}>
        <Text style={styles.WorkoutButtonText}>Start Workout</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.WorkDetails}>
        <Text style={styles.WorkTime}>10 Minutes</Text>
        <Text style={styles.WorkMoves}>13 Moves</Text>
      </View>

      <View style={styles.Moves}>
        <Image style={styles.JumpingJacks} source={require('./jumping-jacks.png')}/>
        <Image style={styles.JumpingJacks} source={require('./pushups.png')}/>
        <Image style={styles.JumpingJacks2} source={require('./punches.png')}/>
        <Image style={styles.JumpingJacks} source={require('./triceps-right.png')}/>
        <Image style={styles.JumpingJacks} source={require('./triceps-left.png')}/>
        <Image style={styles.JumpingJacks} source={require('./side-arm-rise.png')}/>
      </View>

      <View style={styles.CirclesContainer}>
        <Image style={styles.Circles} source={require('./circles.png')}/>
      </View>

      <View style={styles.NavbarSquare}>
        <View style={styles.NavbarContainer}>
          <TouchableOpacity onPress={Back}>
          <View style={styles.NavbarItems}>
            <Image style={styles.HomeButton} resizeMode= "contain" source={require('./home-icon-selected-navbar.png')}/>
            <Text style={styles.ButtonDetails}>Home</Text>
          </View>
          </TouchableOpacity>
          
          {/* <View style={styles.NavbarItems2}>
            <Image style={styles.ReportButton} resizeMode= "contain" source={require('./report-icon-navbar.png')}/>
            <Text style={styles.ButtonDetailsGrey}>Report</Text>
          </View> */}
          <TouchableOpacity onPress={Explore}>
          <View style={styles.NavbarItems2}>
            <Image style={styles.ExploreButton} resizeMode="contain" source={require('./explore-icon-navbar.png')}/>
            <Text style={styles.ButtonDetailsGrey}>Explore</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Profile}>
          <View style={styles.NavbarItems3}>
            <Image style={styles.ProfileButton} resizeMode="contain" source={require('./profile-icon-navbar.png')}/>
            <Text style={styles.ButtonDetailsGrey}>Profile</Text>
          </View>
          </TouchableOpacity>

        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  Container:{
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fdfdfd',
    borderColor: 'black',
  },
  BannerSquare:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 146,
    backgroundColor: '#387ADF',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.10)',
  },
  NavbarSquare:{
    position: 'fixed',
    height: 73,
    backgroundColor: '#fdfdfd',
    width: '100%',
    bottom: 0,
  },
  HeaderContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
    marginLeft: 23,
    marginTop: 31,
  },
  Backbutton:{
    marginRight:10,
  },
  Header1:{
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#fdfdfd',
  },
    Title:{
    fontFamily: 'Poppins, semibold',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'left',
    color: '#fdfdfd',
    marginLeft: 23,
  },
  SubtitleContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop: -5,
    marginLeft: 23,
  },
   Subtitle:{
    fontFamily: 'Poppins, semibold',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    color: '#fdfdfd',
  },
  CalPict:{
    marginLeft: 3,

  },
  Subtitle2:{
    fontFamily: 'Poppins, semibold',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    color: '#fdfdfd',
  },
  Subtitle3:{
    fontFamily: 'Poppins, semibold',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    color: '#fdfdfd',
  },
  WatPict:{
    marginLeft: 3,
  },
  BanPict:{
    position:'absolute',
    right: 0,
    top: 36,
  },
  StartButton:{
    alignSelf: 'center',
    marginTop: 26,
    width : 320,
  },

  ButtonContainer:{
    marginTop: 10,
    marginHorizontal: 8,
  },
  WorkoutButton:{
    marginTop:20,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#387ADF',
    padding: 10,
    borderRadius:7,
  },
  WorkoutButtonText:{
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '600',
    color: '#fdfdfd',
  },

  WorkDetails:{
    flexDirection: 'row',
    marginTop:7,
    marginHorizontal: 8,
    justifyContent: 'space-between',

  },
  WorkTime:{
    fontFamily: 'Poppins, semibold',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'left',
    color: '#387ADF',
  },
  WorkMoves:{

    fontFamily: 'Poppins, semibold',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'left',
    color: '#387ADF',
  },

  Moves:{
    flexDirection: 'column',
    marginTop: 23,
    marginHorizontal: 8,
  },
  JumpingJacks2:{
    marginTop: -3,
    marginBottom: 10,
  },

  CirclesContainer:{
    position: 'absolute',
    zIndex: -1,
    left: 0,
    bottom:0,
  },

  NavbarContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 70, // Mengurangi margin top agar navbar turun sedikit
  },
  
  NavbarItems:{
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 75,
    marginTop: 30,
  },
    NavbarItems2:{
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
  },
  NavbarItems3:{
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 75,
    marginTop: 30,
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
  ButtonDetails:{
    fontFamily: 'Poppins, semibold',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'left',
    color: '#387ADF',

  },
  ButtonDetailsGrey:{
    fontFamily: 'Poppins, semibold',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'left',
    color: '#616161',
  },
});