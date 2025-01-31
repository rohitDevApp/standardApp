import {LocalStorage} from '@constants/enum/LocalStorage';
import {BASE_URL} from '@constants/enum/Urls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError,
} from 'axios';

//Create a instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

//Request Interceptor with Axios
axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    try {
      const token = (await AsyncStorage.getItem(LocalStorage.TOKEN)) ?? '';
      config.headers.auth = token;
    } catch (err) {
      console.log('Request Interceptor Error', err);
    }
    return config;
  },
  error => Promise.reject(error),
);

//Response Interceptor With Axios
axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  async (error: AxiosError) => {
    if (axios.isAxiosError(error)) {
      console.log('Axios Error:', error.message);
      console.log('Response Interceptor Eroor', error);
      console.log('Error Response Data:', error.response?.data);
      console.log('Error Request Data:', error.config);
      if (error.response?.status === 400) {
        console.error('Bad Request - Check request payload or parameters.');
      }
    }

    const fcm_token = await AsyncStorage.getItem(
      LocalStorage.NOTIFICATIONTOKEN,
    );
    if (error.response?.status) {
      if (error.response?.status === 401) {
        //----------------------------------------------   Logout API Calling  ---------------------------------------------
        const result = await axios.patch(
          'https://dev.api.ineeze.com/users/logout',
          {
            notificationToken: fcm_token,
          },
        );
        if (result?.data?.status === 'Ok') {
          await AsyncStorage.multiRemove(['Remember', 'userId', 'token']);
        }
      }
    }
  },
);

export default axiosInstance;
