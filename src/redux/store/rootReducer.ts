import {combineReducers} from '@reduxjs/toolkit';
import {AuthService} from '../Services/auth/AuthService';
import notificationReducer from './slices/notification/notificationSlice';
import getProfileReducer from './slices/profile/profileSlice';

const rootReducer = combineReducers({
  [AuthService.reducerPath]: AuthService.reducer,
  getProfile: getProfileReducer,
  getNotification: notificationReducer,
});

export default rootReducer;
