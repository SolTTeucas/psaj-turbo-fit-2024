import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Impor fungsi navigasi yang diperlukan

export default function Premium1() {
  const navigation = useNavigation(); // Inisialisasi navigasi

  // Handler untuk menangani klik pada teks "Premium2"
  const handlePremium2Press = () => {
    // Navigasi ke halaman setting (ganti 'SettingsScreen' dengan nama halaman setting sesuai dengan aplikasi Anda)
    navigation.navigate('Premium2');
  };

  // Handler untuk menangani klik pada teks "Back"
  const handleBackPress = () => {
    // Navigasi ke halaman setting (ganti 'SettingsScreen' dengan nama halaman setting sesuai dengan aplikasi Anda)
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.settingIconProfile} source={require('../../assets/back2.png')} />
          <Text style={styles.headerText}>Premium</Text>
        </TouchableOpacity> 
      </View>
      {/* Konten */}
      <View style={styles.content}>
        {/* Card */}
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Image style={styles.logo} source={require('../../assets/timep.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>Remove Ads</Text>
              <Text style={styles.cardDescription}>Tonton video dan dapatkan fitur hilangkan iklan</Text>
            </View>
          </View>
          <View style={styles.card2}>
            <Text style={styles.cardTitle2}>Anda Memiliki</Text>
            <View style={styles.chanceRow}>
              <Text style={styles.chanceNumber}>4</Text>
              <Text style={styles.chanceText}>kesempatan untuk menghapus iklan</Text>
            </View>
          </View>
          <View style={styles.card3}>
            <Text style={styles.cardTitle2}>Premium Package</Text>
            <Text style={styles.cardTitle3}>Package 1</Text>
            <TouchableOpacity onPress={handlePremium2Press} style={styles.subscribeButton}>
              <Text style={styles.package}>
                <Text style={styles.cardPackage}>
                  <Image style={styles.logo2} source={require('../../assets/bulletW.png')} />
                  <Text style={styles.packageText}>Ad-free for 7 days</Text>
                </Text>
                
              </Text>
              <Text style={styles.cardTitle4}>$5</Text>
            </TouchableOpacity>
            <Text style={styles.cardTitle3}>Package 2</Text>
            <TouchableOpacity style={styles.subscribeButton}>
              <Text style={styles.package2}>
                <Text style={styles.cardPackage}>
                  <Image style={styles.logo2} source={require('../../assets/bulletBl.png')} />
                  <Text style={styles.packageText2}>Ad-free for 30 days</Text>
                </Text>
                
              </Text>
              <Text style={styles.cardTitle5}>$20</Text>
            </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    width: '100%',
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
    marginRight: 130,
  },
  settingIconProfile: {
    width: 30,
    height: 25,
    marginRight: 100,
  },
  content: {
    marginTop: 70,
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: 10,
    marginTop: -10,
  },
  logo2: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: -10,
  },
  card: {
    borderRadius: 10,
    padding: 20,
    width: 340,
    height: 620,
    alignItems: 'center',
    backgroundColor: '#387ADF',
    overflow: 'hidden',
  },
  card2: {
    borderRadius: 10,
    padding: 20,
    width: 308,
    height: 127,
    alignItems: 'flex-start',
    backgroundColor: '#ffff',
    overflow: 'hidden',
    marginTop: 30, 
  },
  card3: {
    borderRadius: 10,
    padding: 20,
    width: 308,
    height: 290,
    alignItems: 'flex-start',
    backgroundColor: '#ffff',
    overflow: 'hidden',
    marginTop: 20, 
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  cardTitle2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#484848',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 10,
  },  
  cardTitle3: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
    color: '#484848',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  cardTitle4: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -30,
    marginLeft: 185,
    color: '#ffff',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },  
  cardTitle5: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -30,
    marginLeft: 185,
    color: '#2C43BE',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },  
  cardDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  cardPackage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subscribeButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  package: {
    width: 219,
    height: 68,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#2C43BE',
  },
  package2: {
    width: 219,
    height: 68,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
  },
  packageText: {
    color: '#ffff',
    fontSize: 16,
  },
  packageText2: {
    color: '#2C43BE',
    fontSize: 16,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  chanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  chanceNumber: {
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 5,
    color: 'blue',
  },
  chanceText: {
    fontSize: 14,
  },
});
