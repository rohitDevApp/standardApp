import {View} from 'react-native';
import React, {useCallback, useState} from 'react';
import CustomText from '@ui/components/atoms/CustomText';
import {GlobalStyle} from '@ui/styles/global';
import {AuthStyle} from './authStyle';
import InputWithLabel from '@ui/components/atoms/input/InputWithLabel';
import PasswordInput from '@ui/components/atoms/input/PasswordInput';
import CustomButton from '@ui/components/atoms/CustomButton';
import {ROUTES} from '@constants/enum/Navigation';
import LinkText from '@ui/components/atoms/LinkText';
import {useTheme} from '@utils/theme/ThemeProvider';
import {useFormik} from 'formik';
import {signupInitialValues, signupSchema} from '@utils/auth/AuthUtils';
import {signupFormType} from '@utils/types/ui/authType';
import {useUserSignupMutation} from '@redux/Services/auth/AuthService';
import {navigate} from '@utils/NavigaitonFunc';
import KeyboardAvoidContainer from '@ui/components/layout/KeyboardAvoidContainer';
import {SCREEN_HEIGHT} from '@constants/enum/OperatingSystem';

const SignupScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {colors} = useTheme();
  const [handlerRegistration] = useUserSignupMutation();

  // //formik
  const formik = useFormik({
    initialValues: signupInitialValues,
    validationSchema: signupSchema,
    onSubmit: (values, {resetForm}) => {
      setIsLoading(true);
      handlerSignup(values, resetForm);
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
  const handlerSignup = useCallback(
    async (value: signupFormType, resetForm: () => void) => {
      const {email, password} = value || {};
      try {
        let response = await handlerRegistration({
          username: email,
          password: password,
        });
        if (response?.data) {
          resetForm();
          navigate(ROUTES.HOME);
        } else {
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    },
    [handlerRegistration],
  );

  return (
    <KeyboardAvoidContainer>
      <View style={[GlobalStyle.innerContainer, {height: SCREEN_HEIGHT * 0.8}]}>
        <View style={AuthStyle.authHeader}>
          <CustomText color={'black'} size={20}>
            Welcome SignUp !
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
            title={'Signup'}
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
              text={' Login'}
              top={14}
              color="blue"
              routeName={ROUTES.LOGIN}
            />
          </CustomText>
        </View>
      </View>
    </KeyboardAvoidContainer>
  );
};

export default React.memo(SignupScreen);
