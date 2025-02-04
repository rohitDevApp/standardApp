import {View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useUserLoginMutation} from '@redux/Services/auth/AuthService';
import {GlobalStyle} from '@ui/styles/global';
import CustomText from '@ui/components/atoms/CustomText';
import {AuthStyle} from './authStyle';
import InputWithLabel from '@ui/components/atoms/input/InputWithLabel';
import PasswordInput from '@ui/components/atoms/input/PasswordInput';
import CustomButton from '@ui/components/atoms/CustomButton';
import LinkText from '@ui/components/atoms/LinkText';
import {ROUTES} from '@constants/enum/Navigation';
import {useFormik} from 'formik';
import {loginFormType} from '@utils/types/ui/authType';
import {useTheme} from '@utils/theme/ThemeProvider';
import {loginInitialValues, loginSchema} from '@utils/auth/AuthUtils';
import {getFCMTokenGen} from '@utils/auth/FcmToken';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LocalStorage} from '@constants/enum/LocalStorage';
import {navigate} from '@utils/NavigaitonFunc';
import KeyboardAvoidContainer from '@ui/components/layout/KeyboardAvoidContainer';
import {SCREEN_HEIGHT} from '@constants/enum/OperatingSystem';

const LoginScreen = () => {
  const [loginHandler] = useUserLoginMutation();
  const [isLoading, setIsLoading] = useState(false);
  const {colors} = useTheme();

  // //formik
  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginSchema,
    onSubmit: (values, {resetForm}) => {
      setIsLoading(true);
      handlerLogin(values, resetForm);
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

  //handlerLogin
  const handlerLogin = useCallback(
    async (value: loginFormType, resetForm: () => void) => {
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
            [LocalStorage.TOKEN, token],
            [LocalStorage.USERID, userId],
            // [LocalStorage.REMEMBER, JSON.stringify(state.Remember)],
            [LocalStorage.NOTIFICATIONTOKEN, fcm_token ?? ''],
          ]);
          resetForm();
          navigate(ROUTES.DASHBOARD);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    },
    [loginHandler],
  );

  return (
    <KeyboardAvoidContainer>
      <View style={[GlobalStyle.innerContainer, {height: SCREEN_HEIGHT * 0.8}]}>
        <View style={AuthStyle.authHeader}>
          <CustomText color={'black'} size={20}>
            Welcome Login !
          </CustomText>
        </View>
        <View style={AuthStyle.body}>
          <InputWithLabel
            label={'Email'}
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
            value={values.email}
          />
          {touched.email && errors.email && (
            <CustomText color="red" size={12}>
              {errors.email}
            </CustomText>
          )}
          <PasswordInput
            label={'Password'}
            onChangeText={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
            value={values.password}
          />
          {touched.password && errors.password && (
            <CustomText color="red" size={12}>
              {errors.password}
            </CustomText>
          )}
          <CustomButton
            title={'Login'}
            bgColor={isValid ? colors.btnColor : colors.disableBtn}
            disabled={isValid ? true : false}
            color="white"
            style={AuthStyle.button}
            loading={isLoading}
            onPress={handleSubmit}
          />
        </View>
        <View style={AuthStyle.footer}>
          <CustomText color={'black'} size={14} align="center">
            Do you have no account ?
            <LinkText
              text={' Signup'}
              top={14}
              color="blue"
              routeName={ROUTES.SIGN_UP}
            />
          </CustomText>
        </View>
      </View>
    </KeyboardAvoidContainer>
  );
};

export default React.memo(LoginScreen);
