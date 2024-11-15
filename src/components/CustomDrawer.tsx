import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Vibration,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/color';
const CustomDrawer = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContainer}>
        <View
          style={{padding: 20, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.nameText}>Yogendra Verma</Text>
          </View>
          <View style={styles.ratingContianer}>
            <Text style={{fontSize: 15, color: '#fff'}}>280 Coins</Text>
            <Icon name="star" size={15} color="#fff" />
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          padding: 5,
          borderTopWidth: 2,
          borderTopColor: colors.BORDER.SECONDARY,
        }}>
        <View style={styles.bottomButtonContainer}>
          <MaterialIcons name="share" size={20} color={colors.PRIMARY} />
          <Text style={{fontSize: 16}}>Invite A Friend</Text>
        </View>
        <View style={styles.bottomButtonContainer}>
          <Icon name="gear" color={colors.PRIMARY} size={20} />
          <Text style={{fontSize: 16}}>Setting</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: colors.PRIMARY,
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 400,
    color: colors.TEXT.PRIMARY,
  },
  ratingContianer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginLeft: 10,
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    padding: 10,
    gap: 15,
  },
});
export default CustomDrawer;
