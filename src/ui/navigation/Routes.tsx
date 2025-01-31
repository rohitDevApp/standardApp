import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackScreens from './StackScreens';
import {navigationRef} from '@utils/NavigaitonFunc';

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackScreens />
    </NavigationContainer>
  );
};

export default React.memo(Routes);
