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
} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

import CustomHeader from '../components/CustomHeader';
import colors from '../theme/color';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootApppStackParamList} from '../../App';
type DashboardProps = NativeStackScreenProps<
  RootApppStackParamList,
  'Dashboard'
>;
function Dashboard({navigation}: DashboardProps): React.JSX.Element {
  return (
    <>
      <CustomHeader />
      <ScrollView
        scrollEnabled={true}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainCard}>
          <Image
            source={{
              uri: 'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg',
            }}
            resizeMode="cover" // Use 'contain' or 'stretch' as needed
            style={styles.maincardImage}
          />

          <Text style={styles.ammenties}>Room 1 Guest 1 Sofa</Text>
          <Text style={styles.roomPlace}>Single Room in center</Text>
          <Text style={styles.description}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </Text>
          <View style={styles.buttonContainer}>
            <Text
              style={styles.button}
              onPress={() => navigation.navigate('ProductList')}>
              Check Availability
            </Text>
          </View>
        </View>
        {/* // INTESRED SECTONI*/}
        <View style={styles.INTESREDContainer}>
          <Text style={styles.INTESREDheadingtext}>
            You May Also be Interested In:
          </Text>
          <View style={styles.INTESREDCardList}>
            <View style={styles.INTESREDCard}>
              <Image
                source={{
                  uri: 'https://www.shutterstock.com/image-photo/gateway-india-mumbai-maharashtra-monument-260nw-1936201141.jpg',
                }}
                resizeMode="cover" // Use 'contain' or 'stretch' as needed
                style={styles.INTESREDCardImage}
              />
              <Text style={styles.INTESREDCardText}>
                Mix the sections, change the colors and unleash your creativity
              </Text>
            </View>
            <View style={styles.INTESREDCard}>
              <Image
                source={{
                  uri: 'https://media.istockphoto.com/id/1079023316/photo/washintotn-monument-at-sunrise-in-modern-style-washington-dc.jpg?b=1&s=612x612&w=0&k=20&c=093PgUisVqMafskE0wrBCNhb05HsUBJu7OQ-5302qWU=',
                }}
                resizeMode="cover" // Use 'contain' or 'stretch' as needed
                style={styles.INTESREDCardImage}
              />
              <Text style={styles.INTESREDCardText}>
                From buttons, to inputs, navbars, alerts or cards, you are
                covered
              </Text>
            </View>
          </View>
          <View style={styles.INTESREDCardList}>
            <View style={styles.INTESREDCard}>
              <Image
                source={{
                  uri: 'https://th.bing.com/th/id/OIG4.hb6x6NsHBTvbDGaD13Ua',
                }}
                resizeMode="cover" // Use 'contain' or 'stretch' as needed
                style={styles.INTESREDCardImage}
              />
              <Text style={styles.INTESREDCardText}>
                Mix the sections, change the colors and unleash your creativity
              </Text>
            </View>
            <View style={styles.INTESREDCard}>
              <Image
                source={{
                  uri: 'https://media.istockphoto.com/id/1079023316/photo/washintotn-monument-at-sunrise-in-modern-style-washington-dc.jpg?b=1&s=612x612&w=0&k=20&c=093PgUisVqMafskE0wrBCNhb05HsUBJu7OQ-5302qWU=',
                }}
                resizeMode="cover" // Use 'contain' or 'stretch' as needed
                style={styles.INTESREDCardImage}
              />
              <Text style={styles.INTESREDCardText}>
                From buttons, to inputs, navbars, alerts or cards, you are
                covered.
              </Text>
            </View>
          </View>
        </View>
        {/* // INTESRED SECTONI*/}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  INTESREDContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(5),
  },
  INTESREDheadingtext: {
    fontSize: 20,
    fontWeight: 700,
    margin: scale(20),
  },
  INTESREDCardList: {
    flex: 1,
    flexDirection: 'row',
    gap: 3,
    marginBottom: scale(20),
  },
  INTESREDCard: {
    width: '44%',
    backgroundColor: colors.TERTIARY,
    borderRadius: 20,
    marginLeft: scale(10),
    marginRight: scale(10),
    padding: scale(10),
  },
  INTESREDCardImage: {
    height: verticalScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  INTESREDCardText: {
    fontSize: 14,
    margin: scale(8),
  },
  contentContainer: {
    backgroundColor: '#ecf0f1',
  },
  mainCard: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  maincardImage: {
    height: verticalScale(300),
    borderRadius: 20,
    marginTop: verticalScale(20),
    marginBottom: verticalScale(10),
  },
  ammenties: {
    fontSize: 15,
    fontWeight: 700,
  },
  roomPlace: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: scale(10),
    marginBottom: scale(10),
  },
  description: {
    fontSize: 20,
    lineHeight: 30,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY,
    height: verticalScale(40),
    marginTop: verticalScale(20),
    borderRadius: 12,
  },
  button: {
    color: 'white',
    fontSize: 18,
    lineHeight: 30,
  },
});

export default Dashboard;
