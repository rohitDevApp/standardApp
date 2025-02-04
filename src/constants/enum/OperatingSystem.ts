import {Dimensions} from 'react-native';

//PlatForm
export enum PLATFORM {
  ANDROID = 'android',
  IOS = 'ios',
}

//PERMISSION
export enum PERMISSION {
  GRANTED = 'granted',
  DENIED = 'denied',
}

//THEME
export enum THEME {
  DARK = 'dark',
  LIGHT = 'light',
}

//SCREEN_HEIGHT
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
