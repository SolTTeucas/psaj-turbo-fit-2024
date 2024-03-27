// BottomTabNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import ConsultScreen from './Consult';
import ProfileScreen from './Profile';
import TaskScreen from './Task';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Consult" component={ConsultScreen} />
      <Tab.Screen name="Task" component={TaskScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
