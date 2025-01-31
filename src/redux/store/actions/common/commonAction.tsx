import {URLS} from '@constants/enum/Urls';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {getCurrentUser} from '@utils/GetCurrentUser';
import ReduxType from '@utils/types/reduxType';
import axiosInstance from '../axiosInterseptor';

//Get
export const getAction = createAsyncThunk('get', async () => {
  try {
    const response = await axiosInstance.get(URLS.NOTIFICATION_URL);
    return response?.data?.data;
  } catch (err) {
    console.log(err, 'Error');
  }
});

//getByParams Action
export const getByField = createAsyncThunk('getByField', async field => {
  try {
    const userData = await getCurrentUser();
    console.log(userData);
    const response = await axiosInstance.get(URLS.NOTIFICATION_URL, {
      params: {
        field,
      },
    });
    return response?.data?.data;
  } catch (err) {
    console.log(err, 'Error');
  }
});

//Get With Pagination
export const getDataWithPagination = createAsyncThunk(
  'getDataWithPagination',
  async ({page, search}: ReduxType.PaginationType) => {
    try {
      const {userId} = await getCurrentUser();
      const response = await axiosInstance.get(URLS.NOTIFICATION_URL, {
        params: {
          page,
          pageNumber: 1,
          search,
          userId,
        },
      });
      return response?.data?.data;
    } catch (err) {
      console.log(err, 'Error');
    }
  },
);
