import React, {FC} from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {customBtnProps} from '@utils/types/ui/atomType';
import CustomText from './CustomText';

const CustomButton: FC<customBtnProps> = ({
  title,
  loading,
  size = 13,
  color = 'black',
  align = 'center',
  fontWeight = '600',
  style,
  bgColor,
  line = 'none',
  disabled = true,
  ...props
}) => {
  return (
    <TouchableOpacity
      disabled={!disabled}
      style={[style, {backgroundColor: bgColor}]}
      {...props}>
      {loading ? (
        <ActivityIndicator animating={true} size={size} color={color} />
      ) : (
        <CustomText
          color={color}
          size={size}
          fontWeight={fontWeight}
          align={align}
          line={line}>
          {title}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

export default React.memo(CustomButton);
