import * as Yup from 'yup';

//loginInitialValue
export const loginInitialValues = {email: '', password: ''};

//login Schema
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required(' Email is required')
    .test('is-email-or-username', 'Invalid username or email', value => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value) || /^[a-zA-Z0-9_]+$/.test(value);
    }),
  password: Yup.string().required('Password Required'),
});

//signupInitialValues
export const signupInitialValues = {email: '', password: ''};

//signupSchema
export const signupSchema = Yup.object().shape({
  email: Yup.string()
    .required(' Email is required')
    .email('Invalid email address'),
  password: Yup.string()
    .required('Password Required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[@$!%*?&]/,
      'Password must contain at least one special character (@, $, !, %, *, ?, &)',
    ),
});
