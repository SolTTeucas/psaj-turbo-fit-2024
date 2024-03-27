import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAWD2NY0Dika3ZAe7-3_YSGEBh1iJxR07E",
  authDomain: "turbo-auth-709a0.firebaseapp.com",
  projectId: "turbo-auth-709a0",
  storageBucket: "turbo-auth-709a0.appspot.com",
  messagingSenderId: "740227681598",
  appId: "1:740227681598:web:a4a21e9244a2c171c6306f",
  measurementId: "G-L7WDZXY351"
};


export const firbaseapp = initializeApp(firebaseConfig);
export const firebaseauth = getAuth(firbaseapp);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};