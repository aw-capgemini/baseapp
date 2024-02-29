import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookingScreen from '../screens/BookingScreen';
import TabsNavigator from './TabsNavigator';
import NewsScreen from '../screens/NewsScreen';
import ShoppingScreen from '../screens/ShoppingScreen';
import Meralco from '../screens/DashboardScreen';

export type MainStackParamList = {
  Tabs: undefined;
  Booking: undefined;
  Shopping: undefined;
  News: undefined;
  Meralco: undefined;
};

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Main.Screen name="Tabs" component={TabsNavigator} />
      <Main.Screen name="Booking" component={BookingScreen} />
      <Main.Screen name="Shopping" component={ShoppingScreen} />
      <Main.Screen name="News" component={NewsScreen} />
      <Main.Screen name="Meralco" component={Meralco} />
    </Main.Navigator>
  );
};

export default MainNavigator;
