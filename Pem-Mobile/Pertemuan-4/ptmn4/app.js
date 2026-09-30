import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import Screen
import HomeScreen from './screens/homescreen';
import ProfileScreen from './screens/profilescreen';

// Inisialisasi Drawer Navigator
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Beranda' }} />
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profil' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}