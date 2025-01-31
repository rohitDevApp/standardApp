/* eslint-disable react-native/no-inline-styles */
import {Text} from 'react-native';
import React, {FC} from 'react';
import {scale} from 'react-native-size-matters';
import {appTextType} from '@utils/types/ui/atomType';

const CustomText: FC<appTextType> = ({
  color,
  size,
  fontWeight = 'normal',
  align = 'left',
  children,
  line = 'none',
  ellipsizeMode,
  numberOfLines,
}) => {
  return (
    <Text
      ellipsizeMode={ellipsizeMode ?? undefined}
      numberOfLines={numberOfLines ?? undefined}
      style={{
        color: color,
        fontSize: scale(size),
        fontWeight: fontWeight,
        textAlign: align,
        fontFamily: 'Inter',
        textDecorationLine: line,
      }}>
      {children}
    </Text>
  );
};

export default React.memo(CustomText);
