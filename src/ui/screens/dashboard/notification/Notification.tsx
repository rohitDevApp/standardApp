import {View, TouchableOpacity, RefreshControl} from 'react-native';
import React, {useCallback} from 'react';
import {useTheme, NotificationStyle, Style} from './External';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from 'src/redux/store/store';
import {getNotificationAction} from 'src/redux/store/actions/notification/notification';
import {Back} from 'src/static/assests/SVG/Icons/Icons';
import {SCR_COLOR, TINT_COLOR} from 'src/static/constant/constant';
import {ROUTES} from 'src/static/enum';
import AppText from 'src/ui/atoms/text/AppText';
import {push} from 'src/common/methods/navigation';
import NotificationFlatlist from './components/NotificationFlatlist';

const Notification = () => {
  const [page, setPage] = React.useState<number>(12);
  const [refresh, setRefresh] = React.useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  //Notifcation Data
  const notificationStore = useSelector(
    (state: RootState) => state?.getNotification?.notification,
  );

  //Theme
  const {colors} = useTheme();

  //Get All notification Data
  React.useEffect(() => {
    dispatch(getNotificationAction(page));
  }, [dispatch, page]);

  // ------------------- Refresh when Pull down  ------------------
  const onRefresh = React.useCallback(() => {
    setRefresh(true);
    setTimeout(() => {
      dispatch(getNotificationAction(page));
      setRefresh(false);
    }, 2000);
  }, [dispatch, page]);

  //Handler Loading
  const handlerLoading = useCallback(() => {
    if (page > notificationStore?.items?.count) {
      return;
    }
    setPage(page + 10);
  }, [page, notificationStore?.items?.count]);

  return (
    <View
      style={[
        Style.padding,
        Style.Container,
        {backgroundColor: colors.background},
      ]}>
      <View style={[Style.flex, Style.w100]}>
        <View style={[Style.flex]}>
          <View style={[Style.padding, Style.flex]}>
            <View style={[Style.flexDirection, Style.alignItems, Style.gap]}>
              <TouchableOpacity onPress={() => push(ROUTES.HOME)}>
                <Back color={colors.IconColor} />
              </TouchableOpacity>
              <AppText weight="bold" size={18} color={colors.text}>
                Notification
              </AppText>
            </View>
            <View style={[NotificationStyle.notificationBody]}>
              <NotificationFlatlist
                notificationStore={notificationStore}
                handlerLoading={handlerLoading}
                refreshControl={
                  <RefreshControl
                    refreshing={refresh}
                    onRefresh={onRefresh}
                    colors={SCR_COLOR}
                    tintColor={TINT_COLOR}
                  />
                }
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default React.memo(Notification);
