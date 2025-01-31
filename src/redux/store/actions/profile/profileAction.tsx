import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from '../axiosInterseptor';
import {getCurrentUser} from '@utils/GetCurrentUser';
import {URLS} from '@constants/enum/Urls';

//Get Profile of Organization
export const getProfileAction = createAsyncThunk('profile', async () => {
  try {
    const {userId} = await getCurrentUser();
    const res = await axiosInstance.get(`${URLS.PROFILE_URL}/${userId}`);
    return res?.data?.data;
  } catch (err) {
    console.log(err, 'Get Profile Error');
  }
});
