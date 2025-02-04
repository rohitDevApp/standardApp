import {View, RefreshControl} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {AppDispatch, RootState} from '@redux/store/store';
import {useDispatch, useSelector} from 'react-redux';
import {getNotificationAction} from '@redux/store/actions/notification/notificationAction';
import LayoutScreen from '@ui/components/layout/LayoutScreen';
import {SCR_COLOR, TINT_COLOR} from '@constants/index';
import CustomText from '@ui/components/atoms/CustomText';
import NotificationFlatlist from './NotificationFlatlist';
import Search from '@ui/components/atoms/Search';
// import {useTheme} from '@utils/theme/ThemeProvider';

const NotificationScreen = () => {
  const [page, setPage] = useState<number>(12);
  const [refresh, setRefresh] = React.useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  //Notifcation Data
  const notificationStore = useSelector(
    (state: RootState) => state?.getNotification?.notification,
  );

  //getSearchValue
  const getSearchValue = useCallback(
    (value: string) => {
      console.log(value, 'parent');
      dispatch(getNotificationAction({page, search: value}));
    },
    [dispatch, page],
  );

  //Get All notification
  useEffect(() => {
    dispatch(getNotificationAction({page, search: ''}));
  }, [dispatch, page]);

  // ------------------- Refresh when Pull down  ------------------
  const onRefresh = React.useCallback(() => {
    setRefresh(true);
    setTimeout(() => {
      dispatch(getNotificationAction({page, search: ''}));
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
    <LayoutScreen>
      <View>
        <CustomText color={'black'} size={17} fontWeight="bold">
          Notification
        </CustomText>
        <Search onChangeText={getSearchValue} />
        <NotificationFlatlist
          notificationStore={notificationStore ?? []}
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
    </LayoutScreen>
  );
};

export default React.memo(NotificationScreen);
