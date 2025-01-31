import {Text, TextInput, View} from 'react-native';
import React from 'react';
import AppText from '../text/AppText';
import {Style, useTheme} from '../../screens/Common';
import {inputLabelProps} from 'src/types/atoms';
import CustomText from '../CustomText';

const InputWithLabel: React.FC<inputLabelProps> = ({
  label,
  required,
  style,
  weight = 'normal',
  ...props
}) => {
  const {colors} = useTheme();
  const THEME = React.useMemo(
    () => ({
      text: {color: colors.text},
      border: {borderColor: colors.border},
    }),
    [colors],
  );
  return (
    <>
      <CustomText weight={weight ?? '700'} size={12} color={colors.text}>
        {label} {required && <Text style={Style.Error}>*</Text>}
      </CustomText>
      <CustomText title={`${label}  `} />
      <View style={Style.inputFieldWrapper}>
        <TextInput
          placeholder={label}
          style={[Style.inputField, THEME.text, THEME.border, style]}
          placeholderTextColor={colors.lightText}
          {...props}
        />
      </View>
    </>
  );
};

export default React.memo(InputWithLabel);
