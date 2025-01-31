import {createSlice} from '@reduxjs/toolkit';
import {getNotificationAction} from '@redux/store/actions/notification/notificationAction';
import {initialNotificationState} from '../states/allSlicesState';

//notificaitonSlice
const notificaitonSlice = createSlice({
  name: 'notificaitonSlice',
  initialState: initialNotificationState,
  reducers: {},
  extraReducers: builder => {
    builder //Get Notifications
      .addCase(getNotificationAction.pending, state => {
        state.notification.isLoading = false;
      })
      .addCase(getNotificationAction.fulfilled, (state, action) => {
        state.notification.items = action.payload;
        state.notification.isLoading = false;
        state.notification.initialLoading = false;
      })
      .addCase(getNotificationAction.rejected, state => {
        state.notification.isError = true;
        state.notification.isLoading = false;
        state.notification.initialLoading = false;
      });
  },
});

export default notificaitonSlice.reducer;
