import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// You can import supported modules from npm
import { Card } from 'react-native-paper';

const Stack = createStackNavigator();

// or any files within the Snack
import Login from './components/MenuLogin/Login';
import Register from './components/MenuLogin/Register';
import OffTraining from './components/Training/OffTraining';
import Contoh from './components/Navbar/Contoh';
import Splash from './components/MenuLogin/Splash';
import RevMenu from './components/Revenue/Menu';
import Dashboard from './components/Dashboard/Main.js';
import ResetPass from './components/MenuLogin/ResetPass';
import ResetPass2 from './components/MenuLogin/ResetPass2';
import Test from './components/MenuLogin/Test.js';
import Arm from './components/ArmExercise/Arm';
import { Details } from './components/ExploreDetails/Details.js';

import Edit from './components/profile/edit.js';
import Profile from './components/profile/profile.js';
import Setting from './components/profile/setting.js';
import Premium1 from './components/premium/premium1.js';
import Premium2 from './components/premium/premium2.js';
import Premium3 from './components/premium/premium3.js';
import Explore from './components/Dashboard/explore.js';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />

        <Stack.Screen name="RevMenu" component={RevMenu} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Arm" component={Arm} />
        <Stack.Screen name="Details" component={Details} />

        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="Premium1" component={Premium1} />
        <Stack.Screen name="Premium2" component={Premium2} />
        <Stack.Screen name="Premium3" component={Premium3} />
        <Stack.Screen name="Explore" component={Explore} />

        {/* Tambahkan layar lain di sini jika diperlukan */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
