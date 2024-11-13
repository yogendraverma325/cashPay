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

import Icon from 'react-native-vector-icons/FontAwesome';
const CustomDrawer = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContainer}>
        <ImageBackground
          source={require('../assets/images/backGroundImage.jpg')}
          style={{padding: 20}}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.profileImage}
          />
          <Text style={styles.nameText}>Yogendra Verma</Text>
          <View style={styles.ratingContianer}>
            <Text style={{fontSize: 15, color: '#fff'}}>280 Coins</Text>
            <Icon name="star" size={15} color="#fff" />
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          padding: 5,
          borderTopWidth: 2,
          borderTopColor: '#ccc',
        }}>
        <View style={styles.bottomButtonContainer}>
          <Icon name="share" color="#4FD3DA" size={20} />
          <Text style={{fontSize: 16}}>Invite A Friend</Text>
        </View>
        <View style={styles.bottomButtonContainer}>
          <Icon name="gear" color="#4FD3DA" size={20} />
          <Text style={{fontSize: 16}}>Setting</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: '#4FD3DA',
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginBottom: 10,
  },
  nameText: {fontSize: 20, fontWeight: 400, color: '#fff'},
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
