import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAuth} from '../Utils/authContext';
import {useNavigation} from '@react-navigation/native';
const CustomHeader = (props: any) => {
  const {logout} = useAuth();
  const navigation = useNavigation();
  const logoutFunc = async () => {
    try {
      await logout();
    } catch (e) {}
  };
  return (
    <View style={styles.headerContainer}>
      <MaterialIcons
        name="home"
        size={28}
        style={styles.headerIcon}
        onPress={() => navigation.openDrawer()}
      />
      <MaterialIcons
        name="logout"
        size={30}
        style={styles.headerIcon}
        onPress={logoutFunc}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    height: 40,
    borderBottomWidth: 0.2,
  },
  headerIcon: {
    color: '#4FD3DA',
    marginHorizontal: 10,
  },
});
export default CustomHeader;
