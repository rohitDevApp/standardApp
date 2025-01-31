import {createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../axiosInterseptor';
import ReduxType from '@utils/types/reduxType';
import {LocalStorage} from '@constants/enum/LocalStorage';
import {URLS} from '@constants/enum/Urls';

//Get All Notification
export const getNotificationAction = createAsyncThunk(
  'Notification',
  async ({page, search}: ReduxType.PaginationType) => {
    try {
      const id = await AsyncStorage.getItem(LocalStorage.USERID);
      const response = await axiosInstance.get(URLS.NOTIFICATION_URL, {
        params: {
          pageSize: page,
          pageNumber: 1,
          userId: id,
          search: search,
        },
      });
      return response?.data?.data;
    } catch (err) {
      console.log(err);
    }
  },
);
