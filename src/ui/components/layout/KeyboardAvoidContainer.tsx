import {KeyboardAvoidingView, ScrollView} from 'react-native';
import React, {FC} from 'react';
import {GlobalStyle} from '@ui/styles/global';
import {useTheme} from '@utils/theme/ThemeProvider';
import {childrenType} from '@utils/types/ui/atomType';
import LayoutScreen from './LayoutScreen';

const KeyboardAvoidContainer: FC<childrenType> = ({children}) => {
  const {colors} = useTheme();
  return (
    <KeyboardAvoidingView
      style={[GlobalStyle.flex, {backgroundColor: colors.background}]}>
      <ScrollView
        style={[GlobalStyle.flex]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        showsHorizontalScrollIndicator={false}>
        <LayoutScreen>{children}</LayoutScreen>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidContainer;
