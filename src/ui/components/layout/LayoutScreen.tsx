import {View} from 'react-native';
import React, {FC} from 'react';
import {GlobalStyle} from '@ui/styles/global';
import {layoutScreenType} from 'utils/types/ui/screenType';

const LayoutScreen: FC<layoutScreenType> = ({children}) => {
  return (
    <View style={[GlobalStyle.flex, GlobalStyle.container]}>{children}</View>
  );
};

export default React.memo(LayoutScreen);
