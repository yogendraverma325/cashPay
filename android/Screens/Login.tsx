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

function Login(backgroundStyle: any): React.JSX.Element {
  const mutation = loginMutate();
  const {setIsLoading} = useLoading();
  const handleUserSubmit = async (values: {tmc: string; password: string}) => {
    try {
      setIsLoading(true);
      const status = await mutation.mutateAsync(values);
      console.log('Status:', status); // Log the entire response
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
      style={[backgroundStyle, styles.scrollView]}
      contentContainerStyle={styles.contentContainer}>
      <Formik
        initialValues={{
          tmc: '13675',
          password: 'Yogi@12345',
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
            <Text style={styles.title}>Welcome Back</Text>
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

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => handleSubmit()}
              disabled={mutation.isPending}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
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
      <Toast />
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
    paddingHorizontal: 10,
    backgroundColor: '#4FD3DA',
  },
  formContainer: {
    width: '100%',
    height: '95%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 7,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'balck',
    marginBottom: 50,
    marginTop: 50,
  },
  input: {
    width: '100%',
    backgroundColor: '#ecf0f1',
    borderRadius: 30,
    height: 50,
    marginBottom: 25,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  loginButton: {
    backgroundColor: '#4FD3DA', // Button background color
    borderRadius: 30,
    height: 50,
    width: '80%', // Width of the button
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white', // Text color
    fontWeight: '500',
    fontSize: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 10,
  }, // Error message style
  loadingcontainer: {
    ...StyleSheet.absoluteFillObject, // Covers the entire screen
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
