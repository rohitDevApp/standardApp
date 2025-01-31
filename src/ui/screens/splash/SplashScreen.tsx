import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import LayoutScreen from '@ui/components/layout/LayoutScreen';
import {GlobalStyle} from '@ui/styles/global';
import {navigate} from '@utils/NavigaitonFunc';
import {ROUTES} from '@constants/enum/Navigation';

const SplashScreen = () => {
  //Go to the Login Screen
  useEffect(() => {
    setTimeout(() => {
      navigate(ROUTES.NOTIFICATION);
    }, 2000);
  }, []);

  return (
    <LayoutScreen>
      <View style={[GlobalStyle.flex]}>
        <Text>SplashScreen</Text>
      </View>
    </LayoutScreen>
  );
};

export default React.memo(SplashScreen);
