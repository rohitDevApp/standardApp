import {View, Text} from 'react-native';
import React from 'react';
import {useUserLoginMutation} from '@redux/Services/auth/AuthService';

const LoginScreen = () => {
  const [loginHandler] = useUserLoginMutation();

  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default React.memo(LoginScreen);
