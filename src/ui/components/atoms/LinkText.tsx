import {Text} from 'react-native';
import React, {FC} from 'react';
import {navigate} from '@utils/NavigaitonFunc';

interface LinkTextType {
  text: string;
  top?: number;
  color?: string;
  routeName: string;
  align?: 'left' | 'center';
}

const LinkText: FC<LinkTextType> = ({
  text,
  top,
  color,
  align = 'left',
  routeName,
}) => {
  return (
    <Text
      style={{marginTop: top ?? 0, color: color, textAlign: align}}
      onPress={() => navigate(routeName)}>
      {text}
    </Text>
  );
};

export default React.memo(LinkText);
