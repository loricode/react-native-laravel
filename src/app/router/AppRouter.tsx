/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../views/auth';
import { Home } from '../views/home/Home';

const Stack = createNativeStackNavigator();

export const AppRouter = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>

     <Stack.Screen options={{ title:'',  headerShown:false }}
      name="Auth"
      component={SignIn}
     />
     <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};
