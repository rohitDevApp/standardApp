// import {PLATFORM, PERMISSION} from '@constants/enum/OperatingSystem';
// import {Platform, Alert, Linking} from 'react-native';

export const getFCMTokenGen = async () => {
  return '';
  //   if (Platform.OS === PLATFORM.ANDROID) {
  //     // const granted = await requestAndroidNotificationPermission();
  //     if (granted === PERMISSION.GRANTED) {
  //       //   const notification_token = await requestUserPermission();
  //       //   return notification_token;
  //     } else {
  //       Alert.alert(
  //         'Permission Required',
  //         'Notification permission is required for this feature. Please enable it manually in the app settings.',
  //         [
  //           {
  //             text: 'Go to Settings',
  //             onPress: () => {
  //               Linking.openSettings();
  //             },
  //           },
  //           {
  //             text: 'Cancel',
  //             style: 'cancel',
  //           },
  //         ],
  //         {cancelable: true},
  //       );
  //     }
  //   } else {
  //     //IOS
  //     // const notification_token = await requestUserPermission();
  //     return notification_token;
  //   }
};
