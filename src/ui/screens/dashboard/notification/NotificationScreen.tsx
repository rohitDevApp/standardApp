import {Text, FlatList, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {AppDispatch, RootState} from '@redux/store/store';
import {useDispatch, useSelector} from 'react-redux';
import {getNotificationAction} from '@redux/store/actions/notification/notificationAction';
import LayoutScreen from '@ui/components/layout/LayoutScreen';

const NotificationScreen = () => {
  const [page, setPage] = useState<number>(12);
  const [refresh, setRefresh] = React.useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  //Notifcation Data
  const notificationStore = useSelector(
    (state: RootState) => state?.getNotification?.notification,
  );

  //Get All notification
  useEffect(() => {
    dispatch(getNotificationAction({page}));
  }, [dispatch, page]);

  // ------------------- Refresh when Pull down  ------------------
  const onRefresh = React.useCallback(() => {
    setRefresh(true);
    setTimeout(() => {
      dispatch(getNotificationAction({page}));
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
        <Text>Notfication</Text>
        <FlatList data={[{}, {}]} renderItem={() => <Text>One</Text>} />
      </View>
    </LayoutScreen>
  );
};

export default React.memo(NotificationScreen);
