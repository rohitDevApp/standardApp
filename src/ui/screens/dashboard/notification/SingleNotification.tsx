import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import moment from 'moment';

// import {NotificationStyle, notificationProps} from '../External';
import CustomText from '@ui/components/atoms/CustomText';
import {useTheme} from '@utils/theme/ThemeProvider';
import {GlobalStyle} from '@ui/styles/global';
import {COLOR} from '@constants/index';
import {singleNotificationProps} from '@utils/types/ui/screenType';
import NotificationStyle from './NotificationStyle';

const SingleNotification = ({item}: singleNotificationProps) => {
  //Theme
  const {colors} = useTheme();
  const time = moment(item?.createdAt).fromNow();

  //Show Notification
  const showNotification = () => {
    // navigate(ROUTES.POST, {
    //   screen: ROUTES.VIEWDETAILS,
    //   params: {
    //     jobApplyId: item?.jobApplyId,
    //   },
    // });
  };

  return (
    <TouchableOpacity
      onPress={showNotification}
      style={[GlobalStyle.flexDirection, NotificationStyle.NotificationBox]}>
      <View style={[NotificationStyle.NotificationContactPic]}>
        <Image
          source={{uri: item?.profileUrl}}
          style={[
            NotificationStyle.notifyImage,
            !item?.profileUrl ? GlobalStyle.border : null,
          ]}
        />
      </View>
      <View
        style={[
          NotificationStyle.NotificationDetails,
          GlobalStyle.flexDirection,
        ]}>
        <View>
          <CustomText size={11} color={colors.text}>
            {item?.message || ''}
          </CustomText>
          <CustomText size={12} color={colors.text}>
            <CustomText size={12} color={COLOR.ORANGE}>
              Check Profile.
            </CustomText>
            <CustomText size={12} color={colors.text}>
              {time || ''}
            </CustomText>
          </CustomText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(SingleNotification);
