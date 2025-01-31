import AsyncStorage from '@react-native-async-storage/async-storage';
import { LocalStorage } from 'constants/enum/LocalStorage';

//GetUser
export const getCurrentUser = async () => {
  const userId = await AsyncStorage.getItem(LocalStorage.USERID);
  const token = await AsyncStorage.getItem(LocalStorage.TOKEN);
  return {
    userId: userId,
    token: token,
  };
};
