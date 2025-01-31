import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppText from '../text/AppText';
import {Style, useTheme} from '../../screens/Common';
import {inputLabelProps} from 'src/types/atoms';
import {Hide, Show} from 'src/static/assests/SVG/Icons/Icons';
import {moderateScale} from 'react-native-size-matters';

const PasswordInput: React.FC<inputLabelProps> = ({
  label,
  required,
  weight = 'normal',
  style,
  eye = true,
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
      <AppText weight={weight ?? '700'} size={12} color={colors.text}>
        {label} {required && <Text style={Style.Error}>*</Text>}
        {label === 'Duration' ? (
          <AppText size={11} color={colors.text}>
            (In Months )
          </AppText>
        ) : label === 'Additional Detail' ? (
          <AppText size={11} color={colors.text}>
            <AppText size={11} color={colors.text}>
              (Optional )
            </AppText>{' '}
          </AppText>
        ) : null}
      </AppText>
      <View style={[Style.inputFieldWrapper]}>
        <TextInput
          style={[Style.inputField, THEME.border, THEME.text, style]}
          placeholder={label}
          placeholderTextColor={colors.lightText}
          secureTextEntry={!toggelPassIcon}
          {...props}
        />
        {eye && (
          <TouchableOpacity
            style={[styles.showPassIcon]}
            onPress={() => setToggelPassIcon(!toggelPassIcon)}>
            {toggelPassIcon ? (
              <Hide color={colors.text} />
            ) : (
              <Show color={colors.text} />
            )}
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
