import {View, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {searchProps} from '@utils/types/ui/atomType';
import {useTheme} from '@utils/theme/ThemeProvider';
import {GlobalStyle} from '@ui/styles/global';

const Search = (props: searchProps) => {
  const [search, setSearch] = useState('');

  const {colors} = useTheme();
  const THEME = React.useMemo(
    () => ({
      text: {color: colors.text},
      lightbg: {backgroundColor: colors.lightbg},
    }),
    [colors],
  );

  //Debouncing Function
  useEffect(() => {
    const handler = setTimeout(() => {
      props.onChangeText(search);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [search, props]);

  return (
    <View
      style={[
        GlobalStyle.SearchInputBox,
        GlobalStyle.flexDirectionCenter,
        THEME.lightbg,
      ]}>
      {/* <Image
        source={IMAGES.SearchIcon}
        resizeMode="contain"
        style={Style.SearchIcon}
      /> */}
      <TextInput
        placeholder="Search"
        style={[GlobalStyle.SearchInput, THEME.text]}
        placeholderTextColor={colors.text}
        cursorColor={colors.text}
        defaultValue={search}
        onChangeText={text => setSearch(text)}
        clearButtonMode="always"
      />
    </View>
  );
};

export default React.memo(Search);
