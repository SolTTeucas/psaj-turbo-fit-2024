import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Image, StyleSheet,View,SafeAreaView,Text,Pressable,TouchableOpacity} from 'react-native';



const SplashScreen = () => {

  const navigation = useNavigation();
  const ExercisePagePress=() => {
    navigation.navigate('Arm');
  };

  const Profile = () => {
    navigation.navigate('Profile');
  };

  const Explore = () => {
    navigation.navigate('Explore');
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.HeadingContainer}>
        <View style={styles.HeadingSubContainer}>
          <TouchableOpacity style={styles.NavbarBurger}>
            <View style={styles.NavbarBar}></View>
            <View style={styles.NavbarBar}></View>
            <View style={styles.NavbarBar}></View>
          </TouchableOpacity>
          <Text style={styles.Heading1}>Hello, John!</Text>
        </View>
        <TouchableOpacity onPress={Profile}>
          <Image style={styles.Profile}  source={require('./profile.png')}/>
        </TouchableOpacity>
      </View>
      <View style={styles.Sub1Container}>
        <Text style={styles.Sub1}>Daily Activity</Text>
      </View>
      <View style={styles.StatIcons}>
        <View style={styles.Icon1}>
          <Image style={styles.Kkal} resizeMode='contain' source={require('./flame-icon.png')}/>
          <Text style={styles.KkalNum}>250</Text>
          <Text style={styles.KkalDet}>kkal</Text>
        </View>
        <View style={styles.Icon2}>
          <Image style={styles.Kkal} resizeMode='contain' source={require('./stopwatch-icon.png')}/>
          <Text style={styles.KkalNum}>2,5</Text>
          <Text style={styles.KkalDet}>hours</Text>
        </View>
        <View style={styles.Icon3}>
          <Image style={styles.Kkal} resizeMode='contain' source={require('./steps-icon.png')}/>
          <Text style={styles.KkalNum}>2,5</Text>
          <Text style={styles.KkalDet}>hours</Text>
        </View>
      </View>

      <View style={styles.DailyActContainer}>
        <View style={styles.DailyBarItem}>
          <Image style={styles.DailyBar} resizeMode='contain' source={require('./daily-bar.png')}/>
          <Image style={styles.DailyList} resizeMode='contain' source={require('./daily-list.png')}/>
        </View>
      </View>

      <View style={styles.Divider}></View>

      <View style={styles.Sub2Container}>
        <Text style={styles.Sub2}>Workout Plan</Text>
      </View>

      <View style={styles.DayTrackerContainer}>
        <View style={styles.MonCon}>
          <Image style={styles.Mon} resizeMode='contain' source={require('./mon-pict.png')}/>
          <Text style={styles.MonDet}>Mon</Text>
        </View>
        <View style={styles.MonCon}>
          <Image style={styles.Mon} resizeMode='contain' source={require('./tue-pict.png')}/>
          <Text style={styles.MonDet}>Tue</Text>
        </View>
        <View style={styles.MonCon}>
          <Image style={styles.Mon} resizeMode='contain' source={require('./wed-pict.png')}/>
          <Text style={styles.MonDetPres}>Wed</Text>
        </View>
        <View style={styles.MonCon}>
          <Image style={styles.Mon} resizeMode='contain' source={require('./thur-pict.png')}/>
          <Text style={styles.MonDet}>Thur</Text>
        </View>
        <View style={styles.MonCon}>
          <Image style={styles.Mon} resizeMode='contain' source={require('./fri-pict.png')}/>
          <Text style={styles.MonDet}>Fri</Text>
        </View>        
      </View>

      <TouchableOpacity onPress={ExercisePagePress}>
        <View style={styles.ExercisesContainer}>
            <Image style={styles.ArmExercise} resizeMode='contain' source={require('./arm-exercise.png')}/>
        </View>
      </TouchableOpacity>

      <View style={styles.NavbarSquare}>
        <View style={styles.NavbarContainer}>
          <View style={styles.NavbarItems}>
            <Image style={styles.HomeButton} resizeMode= "contain" source={require('./home-icon-selected-navbar.png')}/>
            <Text style={styles.ButtonDetails}>Home</Text>
          </View>
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
};

const styles = StyleSheet.create({
  Container: {
    flex:1,
    justifyContent: 'flex-start',
    backgroundColor: '#fdfdfd',
    borderColor: 'black',
  },
  NavbarBurger:{
    marginRight:23,
    width:23,
    height:20,
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:23,
  },
  NavbarBar:{
    width: '100%',
    height:3,
    backgroundColor: 'black',
  },
  HeadingContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
    marginTop: 10,
  },
  Sub2Container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
    marginLeft:-19,
  },
  Sub2:{
    fontSize:19,
    fontWeight:'600',
    marginLeft:23,  
    color: '#2C6DD1',
  },

  Sub1Container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
    marginTop: 23,
    marginLeft:-19,
  },
  Sub1:{
    fontSize:19,
    fontWeight:'600',
    marginLeft:23,
    marginTop: 13,
    color: '#2C6DD1',
  },
  HeadingSubContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  Heading1:{
    fontSize:24,
    fontWeight:'bold',
    marginLeft:23,
    marginTop: 20,
  },  
  Profile:{
    marginTop:23,
    marginLeft:23,
  },
  
  StatIcons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:6,
    marginHorizontal:50,
  },
  Icon1:{
    flexDirection:'column',
    alignItems: 'center',
    margin:10,
  },
  Icon2:{
    flexDirection: 'column',
    alignItems:'center',
    margin:10,
  },
  Icon3:{
    flexDirection:'column',
    alignItems:'center',
    margin:10,
  },
  KkalNum:{
    fontSize:15,
    fontWeight:'bold',
    color:'#9E9E9E',
  },
  KkalDet:{
    fontSize: 15,
    color:'#9E9E9E'
  },

  DayTrackerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:6,
    marginHorizontal:25,
  },
  MonCon:{
    flexDirection:'column',
    alignItems: 'center',
    marginVertical:6,
  },
  MonDet:{
    fontSize:15,
    color:'#9E9E9E',
  },
  MonDetPres:{
    fontSize:15,
    color:'#387ADF',
  },

  DailyActContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginHorizontal:25,
  },
  DailyBarItem:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent  :'space-between',
    flex:1,
  },
  DailyList:{
  },

  Divider:{
    height:1,
    backgroundColor: '#D9D9D9',
    marginVertical:20,
    marginHorizontal:88,
  },

  ExercisesContainer:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems:'center',
    marginHorizontal:23,
  },
  ArmExercise:{
    width:'100%',
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

export default SplashScreen;
