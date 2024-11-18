/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {loginMutate} from '../Queries/authQueries';
import {displayMessgae} from '../Utils/toast';
import {useLoading} from '../Utils/loader';
import Toast from 'react-native-root-toast';
import {setStorageData} from '../Utils/storageProiver';
import {useAuth} from '../Utils/authContext';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootAuthStackParamList} from '../../App';
import {moderateVerticalScale} from 'react-native-size-matters';
import colors from '../theme/color';
import fonts from '../theme/font';
type LoginProps = NativeStackScreenProps<RootAuthStackParamList, 'Login'>;
function Login({navigation}: LoginProps): React.JSX.Element {
  const mutation = loginMutate();
  const {setIsLoading} = useLoading();
  const {login} = useAuth();
  const handleUserSubmit = async (values: {tmc: string; password: string}) => {
    try {
      setIsLoading(true);
      const status = await mutation.mutateAsync(values);
      await login('NULL');
      displayMessgae({
        message: status.message,
        type: 'SUCCESS',
      });
    } catch (err: any) {
      console.error('Error:', err); // Log error details
      displayMessgae({
        message: err.message,
        type: 'ERROR',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView
      scrollEnabled={true}
      style={[styles.scrollView]}
      contentContainerStyle={styles.contentContainer}>
      <Formik
        initialValues={{
          tmc: '13675',
          password: 'Teams@123',
        }}
        validationSchema={Yup.object({
          tmc: Yup.string().max(255).required('TMC is required'),
          password: Yup.string().max(255).required('Password is required'),
        })}
        onSubmit={(values, {setSubmitting}) => {
          handleUserSubmit(values);
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <View style={styles.formContainer}>
            <Text style={styles.title}>Hey Login Now !</Text>
            <View style={styles.input}>
              <TextInput
                style={styles.inputText}
                placeholder="TMC"
                placeholderTextColor="#003f5c"
                onChangeText={handleChange('tmc')} // Pass specific field name
                onBlur={handleBlur('tmc')}
                value={values.tmc}
              />
              {touched.tmc && errors.tmc && (
                <Text style={styles.errorText}>{errors.tmc}</Text>
              )}
            </View>

            <View style={styles.input}>
              <TextInput
                style={styles.inputText}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#003f5c"
                onChangeText={handleChange('password')} // Pass specific field name
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <View
              style={{
                alignSelf: 'flex-end',
                marginBottom: moderateVerticalScale(15),
              }}>
              <Text>Forgot Password?</Text>
            </View>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => handleSubmit()}
              disabled={mutation.isPending}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View
              style={{
                marginBottom: moderateVerticalScale(15),
              }}>
              <Text>Create An Account?</Text>
            </View>
            {mutation.isPending ? (
              <>
                <View style={styles.loadingcontainer}>
                  <ActivityIndicator size="large" color="#4FD3DA" />
                </View>
              </>
            ) : null}
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateVerticalScale(10),
    backgroundColor: colors.PRIMARY,
  },
  formContainer: {
    width: '100%',
    height: '95%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: moderateVerticalScale(15),
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: moderateVerticalScale(1),
      height: moderateVerticalScale(7),
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: fonts.SIZE.PRIMARY,
    color: 'balck',
    marginBottom: moderateVerticalScale(50),
    marginTop: moderateVerticalScale(50),
  },
  input: {
    width: '100%',
    backgroundColor: colors.BASE,
    borderRadius: 30,
    height: moderateVerticalScale(50),
    marginBottom: moderateVerticalScale(25),
    justifyContent: 'center',
    padding: moderateVerticalScale(20),
  },
  inputText: {
    height: moderateVerticalScale(40),
    color: colors.TEXT.BASE,
  },
  loginButton: {
    backgroundColor: colors.PRIMARY, // Button background color
    borderRadius: 30,
    height: moderateVerticalScale(40),
    width: '80%', // Width of the button
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: colors.TEXT.TERTIARY, // Text color
    fontWeight: '500',
    fontSize: fonts.SIZE.SECONDARY,
  },
  errorText: {
    color: 'red',
    fontSize: fonts.SIZE.TERTIARY,
  }, // Error message style
  loadingcontainer: {
    ...StyleSheet.absoluteFillObject, // Covers the entire screen
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
