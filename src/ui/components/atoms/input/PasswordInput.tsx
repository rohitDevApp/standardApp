import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
// import {Hide, Show} from 'src/static/assests/SVG/Icons/Icons';
import {moderateScale} from 'react-native-size-matters';
import CustomText from '../CustomText';
import {inputLabelProps} from '@utils/types/ui/atomType';
import {GlobalStyle} from '@ui/styles/global';
import {useTheme} from '@utils/theme/ThemeProvider';

const PasswordInput: React.FC<inputLabelProps> = ({
  label,
  required,
  fontWeight = 'normal',
  style,
  eye = true,
  isLabel = true,
  ...props
}) => {
  const [toggelPassIcon, setToggelPassIcon] = useState<boolean>(false);
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
      <View style={[GlobalStyle.inputFieldWrapper]}>
        <TextInput
          style={[GlobalStyle.inputField, THEME.border, THEME.text, style]}
          // placeholder={label}
          placeholderTextColor={colors.lightText}
          secureTextEntry={!toggelPassIcon}
          {...props}
        />
        {eye && (
          <TouchableOpacity
            style={[styles.showPassIcon]}
            onPress={() => setToggelPassIcon(!toggelPassIcon)}>
            {/* {toggelPassIcon ? (
              <Hide color={colors.text} />
            ) : (
              <Show color={colors.text} />
            )} */}
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};
//Styles
const styles = StyleSheet.create({
  showPassIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: moderateScale(8),
    width: moderateScale(32),
    height: moderateScale(32),
  },
});

export default React.memo(PasswordInput);
