import {Formik} from 'formik';
import {Pressable, Text, View, TextInput} from 'react-native';
import * as yup from 'yup';
import React from 'react';
import {
  BorderedInput,
  BorderedText,
  FlexedView,
  FontSizeText,
  MarginView,
  StyledImage,
} from '../../styles';

const LoginScreen = () => {
  const valid = yup.object().shape({
    login: yup
      .string()
      .min(7)
      .typeError('Должно быть строкой')
      .required('Обязательно к заполнению'),
    pass: yup
      .string()
      .min(7)
      .typeError('Должно быть строкой')
      .required('Обязательно к заполнению')
      .matches(/[A-Z]/, 'must contain one uppercase')
      .matches(/([a-z])/, 'must contain one lowercase')
      .matches(/(\d)/, 'must contain one number')
      .matches(/(\W)/, 'must contain one special character'),
  });

  return (
    <View>
      <Formik
        initialValues={{login: null, pass: null}}
        validateOnBlur
        onSubmit={values =>
          alert('login :' + values.login + ' password :' + values.pass)
        }
        validationSchema={valid}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <MarginView marginL="20px" marginT="20px" marginR="20px">
            <FontSizeText fontSize="20px">Login</FontSizeText>
            <BorderedInput
              onChangeText={handleChange('login')}
              value={values.login}
              onBlur={handleBlur('login')}
            />
            {touched.login && errors.login && (
              <FontSizeText color="red">{errors.login}</FontSizeText>
            )}
            <FontSizeText fontSize="20px">Password</FontSizeText>
            <BorderedInput
              onChangeText={handleChange('pass')}
              value={values.pass}
              onBlur={handleBlur('pass')}
            />
            {touched.pass && errors.pass && (
              <FontSizeText color="red">{errors.pass}</FontSizeText>
            )}
            <Pressable onPress={handleSubmit} disabled={!isValid}>
              <BorderedText>Send</BorderedText>
            </Pressable>
          </MarginView>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;
