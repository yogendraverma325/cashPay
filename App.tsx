/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Login from './src/Screens/Login';
import {LoadingProvider} from './src/Utils/loader';
import Toast from 'react-native-root-toast';
import Dashboard from './src/Screens/Dashboard';
import ProductList from './src/Screens/ProductList';
import Profile from './src/Screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from './src/Screens/Cart';
import 'react-native-gesture-handler';
import {AuthProvider, useAuth} from './src/Utils/authContext';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './src/components/CustomDrawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import io from 'socket.io-client';

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const AppStackScreen = () => (
  <Drawer.Navigator
    initialRouteName="Dashboard"
    drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      drawerLabelStyle: {
        fontSize: 18,
        marginLeft: -20,
      },
      headerShown: false,
    }}>
    <Drawer.Screen
      name="Cart"
      component={Cart}
      options={{
        drawerIcon: ({color}) => (
          <Icon name="briefcase" size={20} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        drawerIcon: ({color}) => <Icon name="home" size={20} color={color} />,
      }}
    />
    <Drawer.Screen
      name="ProductList"
      component={ProductList}
      options={{
        drawerLabel: 'Products',
        drawerIcon: ({color}) => <Icon name="list" size={20} color={color} />,
      }}
    />
    <Drawer.Screen
      name="Profile"
      component={Profile}
      options={{
        drawerIcon: ({color}) => <Icon name="user" size={20} color={color} />,
      }}
    />
  </Drawer.Navigator>
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
  if (isLoggedIn == null) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4FD3DA" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};
function App() {
  useEffect(() => {
    const socket = io('https://cbvsqd2f-3000.inc1.devtunnels.ms', {
      transports: ['websocket'], // Ensures WebSocket transport is used
    });

    socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });
    socket.on('livequestion', message => {
      console.log('Received message:', message);
    });

    // Event: Handle disconnection
    socket.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
    });
    return () => {
      socket.disconnect();
    };
  }, []);

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
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional background overlay
  },
});

export default App;
