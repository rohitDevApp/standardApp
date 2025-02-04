import {Text, TextInput, View} from 'react-native';
import React, {FC} from 'react';
import CustomText from '../CustomText';
import {inputLabelProps} from '@utils/types/ui/atomType';
import {useTheme} from '@utils/theme/ThemeProvider';
import {GlobalStyle} from '@ui/styles/global';

const InputWithLabel: FC<inputLabelProps> = ({
  label,
  required,
  style,
  fontWeight = 'normal',
  isLabel = true,
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
      {isLabel ? (
        <CustomText
          fontWeight={fontWeight ?? '700'}
          size={12}
          color={colors.text}>
          {label} {required && <Text style={GlobalStyle.Error}>*</Text>}
        </CustomText>
      ) : null}
      <View style={GlobalStyle.inputFieldWrapper}>
        <TextInput
          // placeholder={label}
          style={[GlobalStyle.inputField, THEME.text, THEME.border, style]}
          placeholderTextColor={colors.lightText}
          {...props}
        />
      </View>
    </>
  );
};

export default React.memo(InputWithLabel);
