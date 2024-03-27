import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Premium2() {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate('Premium1');
  };

  const handlePayPress = () => {
    navigation.navigate('Premium3');
  };

  const handlePayNowPress = () => {
    // Logic for handling payment
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.settingIconProfile} source={require('../../assets/back.png')} />
          <Text style={styles.headerText}>Go Premium</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Selected Nominal</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Text style={styles.cardContent}>$</Text>
          <Text style={styles.cardContent}>5</Text>
        </View>
      </View>
      
      <Text style={styles.payme}>Payment Method</Text>
      
      <View style={styles.cardContainer}>
        <View style={styles.card2}>
          <View style={styles.card3}>
            <Image style={styles.cardImage} source={require('../../assets/card.png')} />
          </View>
          <Text style={styles.payme2}>Credit Card</Text>
        </View>
        <View style={styles.card4}>
          <View style={styles.card3}>
            <Image style={styles.cardImage} source={require('../../assets/paypal.png')} />
          </View>
          <Text style={styles.payme2}>Pay pal</Text>
        </View>
        <View style={styles.card4}>
          <View style={styles.card3}>
            <Image style={styles.cardImage} source={require('../../assets/wallet.png')} />
          </View>
          <Text style={styles.payme2}>Mobile wallet</Text>
        </View>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <Text style={styles.payme3}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Ethan Winters"
        />
        <Text style={styles.payme3}>Card Number</Text>
        <TextInput
          style={styles.input}
          placeholder="1345-9284-2952-9275"
        />
        <Text style={styles.payme3}>PIN</Text>
        <TextInput
          style={styles.input}
          placeholder="*************"
          secureTextEntry={true}
        />
      </View>
      {/* Pay Now Button */}
        <TouchableOpacity onPress={handlePayPress}>
          <Text style={styles.buttonPay}>Pay Now</Text>
        </TouchableOpacity>
      {/* <View style={styles.payNowButtonContainer}>
        <Button title="Pay Now" onPress={handlePayPress} />
      </View> */}
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
    marginRight: 190,
  },
  settingIconProfile: {
    width: 30,
    height: 25,
    marginRight: 30,
  },
  card: {
    backgroundColor: '#2C43BE',
    borderRadius: 10,
    padding: 16,
    position: 'absolute',
    top: 140,
    width: 327,
    height: 86,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10, // Jarak antara teks "Payment Method" dan card
  },
  card2: {
    backgroundColor: '#2C43BE',
    borderRadius: 10,
    padding: 7,
    width: 85,
    height: 68,
    margin: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card3: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    padding: 16,
    width: 34,
    height: 29,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card4: {
    backgroundColor: '#D8D8D8',
    borderRadius: 10,
    padding: 7,
    width: 85,
    height: 68,
    margin: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: 20,
    height: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffff',
  },
  cardContent: {
    fontSize: 32,
    color: '#ffff',
    marginLeft: 4, // Jarak antara tanda $ dan nominal 5
  },
  payme: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 180,
    marginTop: 170,
  },
  payme2: {
    marginTop: 4,
    fontSize: 10,
    color: '#ffff',
  },
  payme3: {
    marginTop: 3,
    marginBottom: 6,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  formContainer: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#EDECEE',
    borderColor: '#ccc',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  payNowButtonContainer: {
    marginTop: 20,
    backgroundColor: '#2C43BE',
    borderRadius: 15,
    paddingHorizontal: 40,
  },
  buttonPay: {
    width: 295,
    height: 51,
    backgroundColor: '#2C43BE',
    color: '#ffff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center', // Menyamakan teks di tengah
    marginTop: 15,
  }

});
