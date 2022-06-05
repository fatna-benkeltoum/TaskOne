// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './App/Screens/HomeScreen/Home';
import Favoris from './App/Screens/Favoris/Favoris';
import Setting from './App/Screens/SettingScreen/Setting';
import Profile from './App/Screens/Profile/Profile';
import Reservation from './App/Screens/ReservationScreen/Reservation';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Favoris" component={Favoris} />
        <Stack.Screen name="Reservation" component={Reservation} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;