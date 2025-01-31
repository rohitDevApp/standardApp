import {createSlice} from '@reduxjs/toolkit';
import {getNotificationAction} from '@redux/store/actions/notification/notificationAction';
import {initialProfileState} from '../states/allSlicesState';

//profileSlice
const profileSlice = createSlice({
  name: 'profileSlice',
  initialState: initialProfileState,
  reducers: {},
  extraReducers: builder => {
    builder //Get User profile
      .addCase(getNotificationAction.pending, state => {
        state.userData.isLoading = false;
      })
      .addCase(getNotificationAction.fulfilled, (state, action) => {
        state.userData.items = action.payload;
        state.userData.isLoading = false;
        state.userData.initialLoading = false;
      })
      .addCase(getNotificationAction.rejected, state => {
        state.userData.isError = true;
        state.userData.isLoading = false;
        state.userData.initialLoading = false;
      });
  },
});

export default profileSlice.reducer;
