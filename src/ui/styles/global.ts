import {Platform, StyleSheet} from 'react-native';
import {
  moderateScale,
  verticalScale,
  scale,
  moderateVerticalScale,
} from 'react-native-size-matters';

export const GlobalStyle = StyleSheet.create({
  alignCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingTop: 22,
    paddingHorizontal: 10,
  },
  bgWhite: {
    backgroundColor: 'white',
  },
  border: {
    borderColor: 'red',
    borderWidth: 1,
  },
  fs14: {
    fontSize: 14,
  },
  //Search Box
  SearchInputBox: {
    borderRadius: moderateScale(8),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: moderateScale(4),
        paddingVertical: verticalScale(6),
      },
      android: {
        elevation: moderateScale(9),
        paddingVertical: verticalScale(6),
      },
    }),
  },
  SearchInput: {
    padding: moderateScale(2),
    width: '88%',
    color: 'black',
  },
  SearchIcon: {
    width: '10%',
    height: verticalScale(12),
  },
  contactSVG: {
    backgroundColor: '#FFB040',
    width: moderateScale(32),
    height: moderateScale(32),
    borderRadius: moderateScale(32),
    alignItems: 'center',
    justifyContent: 'center',
  },
  //Container
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  innerContainer: {
    width: '85%',
    margin: 'auto',
    justifyContent: 'center',
    height: 200,
  },

  Error: {
    color: '#FF5B61',
    fontSize: scale(12),
  },
  linkText: {
    color: 'black',
    fontSize: scale(12),
    textDecorationLine: 'underline',
  },
  textCenter: {
    textAlign: 'center',
  },
  ItemRight: {
    alignItems: 'flex-end',
  },

  //Flexbox
  flex: {
    flex: 1,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  flexDirectionCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flexDirectionBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexDirectionAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  //padding
  p0: {padding: 0},
  pv5: {paddingVertical: moderateVerticalScale(5)},
  pv8: {paddingVertical: moderateVerticalScale(8)},
  pv10: {paddingVertical: moderateVerticalScale(10)},
  padding: {padding: moderateScale(8)},

  // margin
  mb5: {marginBottom: verticalScale(5)},
  mb16: {marginBottom: verticalScale(16)},
  mv20: {marginVertical: verticalScale(20)},
  mv6: {marginVertical: verticalScale(6)},
  mv4: {marginVertical: verticalScale(4)},
  margin: {marginTop: moderateVerticalScale(15)},
  mt16: {marginTop: moderateVerticalScale(16)},
  mt25: {marginTop: moderateVerticalScale(25)},
  mt5: {marginTop: moderateVerticalScale(5)},
  mt9: {marginTop: moderateVerticalScale(9)},
  mv9: {marginVertical: moderateVerticalScale(9)},
  m0: {marginTop: 0},

  jc: {justifyContent: 'center'},
  mx_auto: {margin: 'auto'},

  //radius
  r8: {borderRadius: moderateScale(8)},

  containerPadding: {
    paddingTop: moderateScale(25),
    paddingLeft: moderateScale(18),
    paddingRight: moderateScale(18),
  },
  fw: {
    fontWeight: 'bold',
    fontFamily: 'Inter',
  },
  tabHeadingText: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: scale(14),
    color: '#000000',
    marginBottom: moderateVerticalScale(5),
  },

  //Widths
  w16: {width: '16%'},
  w20: {width: '20%'},
  w30: {width: '30%'},
  w33: {width: '33%'},
  w40: {width: '40%'},
  w48: {width: '48%'},
  w50: {width: '50%'},
  w60: {width: '60%'},
  w70: {width: '70%'},
  w78: {width: '78%'},
  w80: {width: '80%'},
  w85: {width: '85%'},
  w90: {width: '90%'},
  w100: {width: '100%'},

  //Colors
  mainColor: {color: '#FFB040'},
  disabled: {color: 'lightgray'},
  alignItems: {alignItems: 'center'},
  gap: {
    gap: 5,
  },

  //Fields
  field: {
    marginTop: verticalScale(8),
    paddingVertical: moderateVerticalScale(2),
  },

  //Input Style
  inputField: {
    borderWidth: 1,
    borderRadius: moderateScale(8),
    ...Platform.select({
      ios: {
        paddingVertical: moderateScale(14),
        paddingHorizontal: moderateScale(10),
      },
      android: {
        padding: moderateScale(10),
      },
    }),
  },

  //form Input
  formInput: {
    borderRadius: moderateScale(10),
    ...Platform.select({
      ios: {
        paddingVertical: moderateScale(11),
        paddingHorizontal: moderateScale(10),
      },
      android: {
        padding: moderateScale(6),
      },
    }),
  },

  //Input Field Wrapper
  inputFieldWrapper: {
    justifyContent: 'center',
    marginVertical: moderateVerticalScale(8),
  },

  //button Style
  btn: {
    borderRadius: moderateScale(18),
    ...Platform.select({
      ios: {
        paddingVertical: moderateScale(15),
        paddingHorizontal: moderateScale(10),
      },
      android: {
        padding: moderateScale(10),
      },
    }),
  },
  //form btn
  formBtn: {
    borderRadius: moderateScale(8),
    width: '32%',
    margin: 'auto',
    ...Platform.select({
      ios: {
        paddingVertical: verticalScale(7),
        paddingHorizontal: moderateScale(3),
      },
      android: {
        paddingVertical: verticalScale(7),
        paddingHorizontal: moderateScale(3),
      },
    }),

    marginTop: verticalScale(10),
  },
});
