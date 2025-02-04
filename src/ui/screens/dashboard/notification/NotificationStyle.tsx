import {StyleSheet} from 'react-native';
import {
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

const NotificationStyle = StyleSheet.create({
  notificationBody: {
    marginTop: verticalScale(2),
    flex: 1,
  },
  NotificationBox: {
    borderColor: 'red',
    marginTop: verticalScale(8),
    borderRadius: moderateScale(16),
    minHeight: moderateScale(60),
    alignItems: 'center',
  },
  NotificationContactPic: {
    width: '18%',
  },
  NotificationDetails: {
    width: '85%',
  },
  footer: {
    paddingVertical: moderateVerticalScale(20),
  },
  notifyImage: {
    width: moderateScale(45),
    height: moderateScale(45),
    borderRadius: moderateScale(22),
    justifyContent: 'center',
  },
});
export default NotificationStyle;
