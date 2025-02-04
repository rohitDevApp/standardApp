import {View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import LayoutScreen from '@ui/components/layout/LayoutScreen';
import {GlobalStyle} from '@ui/styles/global';
import {navigate} from '@utils/NavigaitonFunc';
import {ROUTES} from '@constants/enum/Navigation';
import CustomText from '@ui/components/atoms/CustomText';

const SplashScreen = () => {
  //Go to the Login Screen
  useEffect(() => {
    setTimeout(() => {
      navigate(ROUTES.NOTIFICATION);
    }, 2000);
  }, []);

  return (
    <View style={[GlobalStyle.flex, SplashStyle.mainBody]}>
      <LayoutScreen>
        <View style={GlobalStyle.alignCenter}>
          <CustomText color={'black'} size={20}>
            Welcome to App !
          </CustomText>
        </View>
      </LayoutScreen>
    </View>
  );
};

const SplashStyle = StyleSheet.create({
  mainBody: {
    backgroundColor: 'lightblue',
  },
});

export default React.memo(SplashScreen);
