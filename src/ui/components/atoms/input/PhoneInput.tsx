import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from '../text/AppText';
import {IMAGES, Style, useTheme} from '../../screens/Common';
import {inputLabelProps} from 'src/types/atoms';
import {SignEmailStyle} from '../../screens/auth/SignUp/External';

const PhoneInput: React.FC<inputLabelProps> = ({
  label,
  dark,
  style,
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
    <View style={[Style.field]}>
      <AppText size={12} color={colors.text}>
        {label}
      </AppText>
      <View style={[Style.flexDirectionBetween, Style.mt5]}>
        <View style={[Style.w20, Style.jc]}>
          <View style={[SignEmailStyle.prefixPhone]}>
            <TouchableOpacity
              activeOpacity={1}
              style={[Style.flexDirectionCenter, Style.alignItems]}>
              <AppText size={12} color={colors.text} align="center">
                + {props?.code || ''}
              </AppText>
              <Image
                source={dark ? IMAGES.LightDropDown : IMAGES.DropDown}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[Style.w78]}>
          <TextInput
            style={[Style.inputField, THEME.text, THEME.border, style]}
            keyboardType="phone-pad"
            placeholder={label}
            maxLength={12}
            editable={false}
            {...props}
          />
        </View>
      </View>
    </View>
  );
};

export default React.memo(PhoneInput);
