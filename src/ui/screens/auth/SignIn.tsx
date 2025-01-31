import {
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {useEffect, useReducer} from 'react';
import {useFormik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Checkbox from 'react-native-check-box';

//External
import {
  useTheme,
  BeautifulAlert,
  SignInStyle,
  loginSchema,
  actionEnum,
  reducer,
  initialValues,
  useLoginOrganisationMutation,
  getFCMTokenGen,
} from './External';
import {Style, IMAGES} from '../../Common';
import {AsyncEnum, ROUTES, PLATFORM, COLOR} from 'src/static/enum';
import {signInPropsType} from 'src/types/screens';
import {
  requestIOSPermission,
  requestPermission,
} from 'src/redux/Services/permission/permission';
import {PERMISSIONS} from 'react-native-permissions';
import AuthContainer from 'src/common/wrapper/AuthContainer';
import AuthFooter from '../../Components/AuthFooter';
import AppText from 'src/ui/atoms/text/AppText';
import Location from 'src/ui/atoms/common/Location';
import InputWithLabel from 'src/ui/atoms/input/InputWithLabel';
import PasswordInput from 'src/ui/atoms/input/PasswordInput';
import CustomButton from 'src/ui/atoms/button/CustomButton';

const SignIn = ({navigation}: signInPropsType) => {
  const [state, dispatch] = useReducer(reducer, initialValues);
  const [loginHandler] = useLoginOrganisationMutation();

  //Themes
  const {colors} = useTheme();

  //Handle Submit
  const handlerSubmit = async (value: {email: string; password: string}) => {
    dispatch({type: actionEnum.SET_LOGIN_LOADER, payload: true});
    //Crediential check
    const {email, password} = value || {};

    try {
      //Gen FCM Token
      let fcm_token = await getFCMTokenGen();
      const res = await loginHandler({
        username: email,
        password: password,
        notificationToken: fcm_token,
      });
      if (res?.data) {
        //Store data into Async Storage
        const {token, userId} = res?.data?.data;
        await AsyncStorage.multiSet([
          [AsyncEnum.TOKEN, token],
          [AsyncEnum.USERID, userId],
          [AsyncEnum.REMEMBER, JSON.stringify(state.Remember)],
          [AsyncEnum.NOTIFICATIONTOKEN, fcm_token ?? ''],
        ]);
        dispatch({type: actionEnum.SET_LOGIN_ERROR, payload: false});
        navigation.push(ROUTES.DASH);
      } else {
        dispatch({type: actionEnum.SET_LOGIN_ERROR, payload: true});
      }
      dispatch({type: actionEnum.SET_LOGIN_LOADER, payload: false});
    } catch (Err) {
      console.log(Err);
    }
  };

  //formik
  const formik = useFormik({
    initialValues: {email: '', password: ''},
    validationSchema: loginSchema,
    onSubmit: values => {
      handlerSubmit(values);
    },
  });

  //formik Function
  const {
    values,
    setFieldTouched,
    handleChange,
    touched,
    errors,
    isValid,
    handleSubmit,
  } = formik;

  // ------------------ Back Button Handler ------------------
  type backButtonType = () => boolean;
  const handlerBackButton: backButtonType = () => {
    dispatch({type: actionEnum.SET_MODAL, payload: true});
    return true;
  };

  // ------------------ Before Back button
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e: any) => {
      e.preventDefault();
      BackHandler.addEventListener('hardwareBackPress', handlerBackButton);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', handlerBackButton);
    });
    return unsubscribe;
  });

  //modelOperation
  const onClose = (action: string) => {
    if (action === 'ok') {
      if (Platform.OS === PLATFORM.ANDROID) {
        BackHandler.exitApp();
      }
    }
    dispatch({type: actionEnum.SET_MODAL, payload: false});
  };

  //Starting Permission
  useEffect(() => {
    const getPermission = async () => {
      if (Platform.OS === PLATFORM.ANDROID) {
        await requestPermission(PERMISSIONS.ANDROID.CAMERA);
        await requestPermission(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
      } else {
        await requestIOSPermission(PERMISSIONS.IOS.CAMERA);
        await requestIOSPermission(PERMISSIONS.IOS.PHOTO_LIBRARY);
      }
    };
    getPermission();
  }, []);

  return (
    <AuthContainer>
      <Location />
      <View style={[Style.flex]}>
        <View style={[SignInStyle.wrapper]}>
          <View style={SignInStyle.neezeImageWrapper}>
            <Image source={IMAGES.Ineeze} resizeMode="contain" />
          </View>
          <View style={[Style.mv20]}>
            <AppText weight="500" size={24} color={colors.text} align="center">
              Sign in
            </AppText>
          </View>
          <View style={Style.field}>
            <InputWithLabel
              label="Email address or Username"
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={Style.Error}>{errors.email}</Text>
            )}
          </View>
          <View style={[Style.field]}>
            <PasswordInput
              label="Password"
              defaultValue={values.password}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
            />
            {touched.password && errors.password && (
              <Text style={Style.Error}>{errors.password}</Text>
            )}
          </View>
          <View style={SignInStyle.forgottonArea}>
            <View style={[Style.flexDirection, Style.center]}>
              <Checkbox
                checkBoxColor={colors.text}
                isChecked={state.Remember}
                onClick={() => {
                  dispatch({
                    type: actionEnum.SET_REMEMBER,
                    payload: !state.Remember,
                  });
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  dispatch({
                    type: actionEnum.SET_REMEMBER,
                    payload: !state.Remember,
                  });
                }}>
                <AppText weight="400" size={10} color={colors.text}>
                  Remember me
                </AppText>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.push(ROUTES.EMAIL)}>
              <AppText
                weight="400"
                size={10}
                color={colors.text}
                line="underline">
                Forget your password
              </AppText>
            </TouchableOpacity>
          </View>
          {state.loginError && (
            <AppText weight="400" size={14} color={COLOR.ERROR} align="center">
              Invalid Credentials
            </AppText>
          )}
          <View>
            <CustomButton
              title="Log in"
              loading={state.loginLoader}
              disabled={isValid ? true : false}
              color={colors.background}
              bgColor={isValid ? colors.btnColor : colors.disableBtn}
              style={[Style.mt16]}
              onPress={() => handleSubmit()}
            />
          </View>
          <AuthFooter
            label="New user?"
            page="Sign up"
            Route={ROUTES.SIGN_UP_WITH_EMIAL}
          />
        </View>
        {state.modal ? (
          <BeautifulAlert
            visible={state.modal}
            onClose={onClose}
            title="Exit App"
            message="Exiting the application"
          />
        ) : null}
      </View>
    </AuthContainer>
  );
};

export default React.memo(SignIn);
