import {createContext, useContext, useEffect, useState} from 'react';
import {lightColors, darkColors, themeTypes} from './External';
import {useColorScheme} from 'react-native';
import React from 'react';
import {THEME} from '@constants/index';

export const ThemeContext = createContext({
  dark: false,
  colors: lightColors,
  setScheme: (p: string) => {
    console.log(p);
  },
});

export const ThemeProvider = (props: any) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === THEME.DARK);

  useEffect(() => {
    setIsDark(colorScheme === THEME.DARK);
  }, [colorScheme]);

  const defaultTheme: themeTypes = {
    dark: isDark,
    colors: isDark ? darkColors : lightColors,
    setScheme: (Scheme: string) => setIsDark(Scheme === THEME.DARK),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
