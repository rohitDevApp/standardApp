//Light Colors
export const lightColors = {
  primary: 'white',
  background: 'white',
  card: 'rgb(255, 255, 255)',
  text: '#454545',
  lightText: '#62657D',
  border: 'black',
  darkColor: 'black',
  notification: 'rgb(255, 69, 58)',
  head: '#000000',
  IconColor: '#000',
  lightbg: 'white',
  dash: {
    main: '#FFB040',
    child: '#FFEFB8',
    bg: '#FFB040',
    color: '#1C1C1C',
  },
  mainColor: '#F6F6F6',
  tabColor: 'white',
  tintColor: 'black',
  strockColor: '#FFB040',
  jobPostBg: 'white',
  filterbg: '#EEEFF7',
  btnColor: 'black',
  disableBtn: '#7f7f7f',
};

//Dark Colors
export const darkColors = {
  primary: 'black',
  background: '#282828',
  card: 'rgb(255, 255, 255)',
  text: 'white',
  lightText: '#C7CADF',
  border: 'white',
  darkColor: 'black',
  notification: 'rgb(255, 69, 58)',
  head: 'white',
  IconColor: 'white',
  lightbg: '#4F4F4F',
  dash: {
    main: '#4F4F4F',
    child: '#FFC879',
    bg: '#FFB040',
    color: '#1C1C1C',
  },
  mainColor: '#FFB347',
  tabColor: 'white',
  tintColor: 'white',
  strockColor: 'white',
  jobPostBg: '#4F4F4F',
  filterbg: '#282828',
  btnColor: '#bfbfbf',
  disableBtn: '#4F4F4F',
};

//interface
export interface themeTypes {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    darkColor: string;
    lightText: string;
    head: string;
    IconColor: string;
    lightbg: string;
    dash: {
      main: string;
      child: string;
      bg: string;
      color: string;
    };
    mainColor: string;
    tabColor: string;
    tintColor: string;
    strockColor: string;
    jobPostBg: string;
    filterbg: string;
    btnColor: string;
    disableBtn: string;
  };
  setScheme: (Scheme: string) => void;
}
