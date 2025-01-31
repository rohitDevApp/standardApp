import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  LoginScreen,
  NotificationScreen,
  SignupScreen,
  SplashScreen,
} from '@ui/screens';
import {ROUTES} from '@constants/enum/Navigation';

const Stack = createNativeStackNavigator();
const StackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.SPLASH} component={SplashScreen} />
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.SIGN_UP} component={SignupScreen} />
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.NOTIFICATION} component={NotificationScreen} />
    </Stack.Navigator>
  );
};

export default React.memo(StackScreens);
