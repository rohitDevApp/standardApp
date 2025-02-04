import {View, FlatList, ActivityIndicator} from 'react-native';
import React, {useCallback} from 'react';
import {useTheme} from '@utils/theme/ThemeProvider';
import SingleNotification from './SingleNotification';
import {GlobalStyle} from '@ui/styles/global';
import CustomText from '@ui/components/atoms/CustomText';
import {notificationFlatListProps} from '@utils/types/ui/screenType';

const NotificationFlatlist: React.FC<notificationFlatListProps> = ({
  notificationStore,
  handlerLoading,
  refreshControl,
}) => {
  const {colors} = useTheme();

  //renderItem
  const renderItem = useCallback(({item}: any) => {
    return <SingleNotification item={item} />;
  }, []);

  //Footer
  const renderFooter = useCallback(() => {
    return (
      notificationStore?.isLoading && (
        // <View style={[NotificationStyle.footer]}>
        <ActivityIndicator animating={true} size={42} color={'#FFB347'} />
        // </View>
      )
    );
  }, [notificationStore?.isLoading]);

  return (
    <>
      {notificationStore?.items?.items?.length > 0 ? (
        <FlatList
          data={notificationStore?.items?.items}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          onEndReached={() => handlerLoading()}
          refreshControl={refreshControl}
          keyExtractor={({item}) => item?.jobId}
          ListFooterComponent={renderFooter}
        />
      ) : (
        <View style={[GlobalStyle.Container]}>
          <CustomText color={colors.text} size={16} fontWeight="bold">
            No New Notification
          </CustomText>
        </View>
      )}
    </>
  );
};

export default React.memo(NotificationFlatlist);
