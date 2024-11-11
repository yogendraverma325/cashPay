/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Login from './android/Screens/Login';
import {LoadingProvider} from './android/Utils/loader';
import Toast from 'react-native-root-toast';
import Dashboard from './android/Screens/Dashboard';
import ProductList from './android/Screens/ProductList';
import Profile from './android/Screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from './android/Screens/Cart';
import {getStorageData} from './android/Utils/storageProiver';
const headerStyle = {
  headerShown: true,
  headerStyle: {
    backgroundColor: '#4FD3DA',
  },
  headerTitleAlign: 'center', // Centers the title
};
import {AuthProvider, useAuth} from './android/Utils/authContext';
const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

const AppStackScreen = () => (
  <AppStack.Navigator initialRouteName="Dashboard">
    <AppStack.Screen name="Cart" component={Cart} />
    <AppStack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{headerShown: false}}
    />
    <AppStack.Screen name="ProductList" component={ProductList} />
    <AppStack.Screen name="Profile" component={Profile} />
  </AppStack.Navigator>
);
const AuthStackScreen = () => (
  <AuthStack.Navigator initialRouteName="Login">
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);
const AppContent = () => {
  const {isLoggedIn} = useAuth();
  console.log('isLoggedIn', isLoggedIn);
  if (isLoggedIn == null) {
    return null;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const queryClient = new QueryClient();
  return (
    <SafeAreaView style={[backgroundStyle, styles.safeAreaView]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <QueryClientProvider client={queryClient}>
        <LoadingProvider>
          <AuthProvider>
            <AppContent />
          </AuthProvider>
          <Toast />
        </LoadingProvider>
      </QueryClientProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default App;
