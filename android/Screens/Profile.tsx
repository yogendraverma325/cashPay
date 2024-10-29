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
  Image,
  FlatList,
} from 'react-native';

function Profile(backgroundStyle: any): React.JSX.Element {
  return (
    <View style={styles.mainCard}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/96/1e/ae/961eaee0f65ce00c9f48a46a773c8a7c.jpg',
          }}
          style={styles.profileimage}
        />
      </View>
      <View style={styles.profileDetailsConainter}>
        <View style={styles.buttonContainer}>
          <View style={styles.ratingButtonContainer}></View>
          <View style={styles.likeButtonContainer}></View>
          <View style={styles.blockButtonContainer}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: '#fff',
  },
  mainCard: {},
  imageContainer: {},
  profileimage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  profileDetailsConainter: {},
  buttonContainer: {},
  ratingButtonContainer: {},
  likeButtonContainer: {},
  blockButtonContainer: {},
});

export default Profile;
