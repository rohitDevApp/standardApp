import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const AuthStyle = StyleSheet.create({
  authHeader: {
    marginBottom: 20,
  },
  body: {
    // flex: 1,
  },
  footer: {
    marginTop: 12,
  },
  button: {
    padding: 8,
    borderRadius: 8,
    marginTop: moderateScale(8),
  },
});
