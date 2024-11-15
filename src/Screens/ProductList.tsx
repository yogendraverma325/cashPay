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
import CustomHeader from '../components/CustomHeader';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootApppStackParamList} from '../../App';
type ProductListProps = NativeStackScreenProps<
  RootApppStackParamList,
  'ProductList'
>;
function ProductList({navigation}: ProductListProps): React.JSX.Element {
  const imageData = [
    {
      profile:
        'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_640.jpg',
      title: 'Inside the Headlines:',
      userName: '@yogi',
      name: 'Aman verma',
      eventDatetime: 'Oct 29th 24 11:26:40 AM',
      rate: 'FIX',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
    },
    {
      profile:
        'https://thumbs.dreamstime.com/b/mountain-landscape-starry-sky-milky-way-elements-image-furnished-nasa-mountain-landscape-starry-sky-307912006.jpg',
      title: '5 Things You Need to Know About',
      userName: '@pranjul',
      name: 'Pranjul yadav',
      eventDatetime: 'Oct 28th 24 10:00:40 AM',
      rate: 'FIX',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
    },
    {
      profile:
        'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/09/instagram-image-size.jpg',
      title: 'Breaking Down the Latest on',
      userName: '@manish',
      name: 'Manish',
      eventDatetime: 'Oct 27th 24 09:00:40 AM',
      rate: 'FIX',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
    },
    {
      profile:
        'https://thumbs.dreamstime.com/b/young-conceptual-image-large-stone-shape-human-brain-conceptual-image-large-stone-shape-110748113.jpg',
      title: 'What’s Really Happening with',
      userName: '@vinay',
      name: 'Vinay Pratap Singh',
      eventDatetime: 'Oct 26th 24 07:26:40 AM',
      rate: 'FIX',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
    },
    {
      profile:
        'https://thumbs.dreamstime.com/b/falling-drop-rain-blue-earth-image-water-splash-crown-shape-water-splash-crown-shape-falling-drop-earth-140453719.jpg',
      title: 'Voices & Perspectives on',
      userName: '@ankit',
      name: 'Ankit Singh',
      eventDatetime: 'Oct 25th 24 05:26:40 AM',
      rate: 'FIX',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
    },
  ];

  const Item = ({
    itemData,
  }: {
    itemData: {
      title: string;
      profile: string;
      userName: string;
      name: string;
      eventDatetime: string;
      description: string;
    };
  }) => (
    <View style={styles.cardContainer}>
      <View style={styles.topContainer}>
        <View style={styles.profleContainer}>
          <Image
            source={{
              uri: itemData.profile,
            }}
            resizeMode="cover"
            style={styles.profileImage}
          />
          <View style={styles.nameUserNameContainer}>
            <Text style={styles.nameText}>{itemData.name}</Text>
            <Text style={styles.usernameText}>{itemData.userName}</Text>
          </View>
        </View>
        <View style={styles.viewdetailsButtonSection}>
          <Text
            style={styles.viewButtonText}
            onPress={() => navigation.navigate('Profile')}>
            View
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.timeContainer}>
          <Text style={styles.eventDatetimeText}>{itemData.eventDatetime}</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{itemData.title}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{itemData.description}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <>
      <CustomHeader />
      <View style={styles.contentContainer}>
        <FlatList
          data={imageData}
          style={styles.listContainer}
          renderItem={({item}) => <Item itemData={item} />}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: '#fff',
    padding: moderateScale(10),
  },
  listContainer: {},
  cardContainer: {
    borderBottomWidth: 0.1,
    elevation: 0.1,
    marginBottom: verticalScale(10),
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: moderateScale(10),
  },
  profleContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  profileImage: {
    height: verticalScale(50),
    width: scale(50),
    borderRadius: 50,
  },
  nameUserNameContainer: {padding: moderateScale(4)},
  usernameText: {
    fontSize: 13,
  },
  nameText: {
    fontSize: 17,
  },
  viewdetailsButtonSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButtonText: {fontSize: 15},
  bottomContainer: {
    padding: moderateScale(15),
    gap: moderateScale(5),
  },
  timeContainer: {},
  eventDatetimeText: {
    fontSize: 13,
  },
  titleContainer: {},
  descriptionContainer: {},
  titleText: {
    fontSize: 20,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 25,
  },
});

export default ProductList;
