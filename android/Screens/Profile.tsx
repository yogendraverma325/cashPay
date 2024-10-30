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
import Icon from 'react-native-vector-icons/FontAwesome';
function Profile({navigation}): React.JSX.Element {
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
      <View>
        <View style={styles.buttonContainer}>
          <View style={[styles.ratingButtonContainer, styles.shadowbox]}>
            <Icon
              name="star"
              size={30}
              color="#3498db"
              onPress={() => navigation.navigate('Dashboard')}
            />
          </View>
          <View style={[styles.likeButtonContainer, styles.shadowbox]}>
            <Icon name="heart" size={30} color="#fff" />
          </View>
          <View style={[styles.blockButtonContainer, styles.shadowbox]}>
            <Icon name="close" size={30} color="#e67e22" />
          </View>
        </View>
      </View>
      <View style={styles.profileDetailConainter}>
        <View style={styles.nameAgeConainter}>
          <Text style={styles.nameAgeText}>Tanya Singh,25</Text>
        </View>
        <Text style={styles.languageText}>Hindi . Punjabi . English</Text>

        <View style={styles.locationBoxConainter}>
          <View style={styles.locationConainter}>
            <Text style={styles.locationHeadingText}>Location</Text>
            <Text style={styles.locationnameText}>Brivai,Mumbai</Text>
          </View>

          <View style={styles.locationDistanceConainter}>
            <View style={styles.locationIcon}>
              <Icon name="map-marker" size={20} color={'#fff'} />
            </View>

            <Text style={styles.distanceText}>1 Km</Text>
          </View>
        </View>

        <View style={styles.aboutBoxContainer}>
          <Text style={styles.aboutHeading}>About</Text>
          <ScrollView style={styles.scrollContainer}>
            <Text style={styles.aboutText}>
              Hi, I'm Nisha singh. I have a background in software engineering
              and specialize in [your skills, e.g., mobile app development, data
              analysis, etc.]. Over the past [X years], I've worked on [mention
              any relevant projects, achievements, or experience]. I’m
              particularly passionate about [specific area, e.g., creating
              intuitive user interfaces, finding insights from data, building
              scalable backend systems, etc.]. Outside of work, I enjoy [mention
              hobbies or interests, e.g., hiking, reading, learning new tech,
              etc.].
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowbox: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
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
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    marginTop: -80,
    zIndex: 9,
  },
  ratingButtonContainer: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: '50%',
  },
  likeButtonContainer: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e74c3c',
    borderRadius: '50%',
  },
  blockButtonContainer: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: '50%',
  },
  profileDetailConainter: {
    backgroundColor: '#fff',
    borderTopLeftRadius: '10%',
    borderTopRightRadius: '10%',
    padding: 20,
    marginTop: -40,
  },
  nameAgeConainter: {
    marginTop: 50,
  },
  nameAgeText: {
    fontSize: 20,
  },
  languageText: {
    fontSize: 15,
    fontWeight: 500,
  },
  locationBoxConainter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  locationConainter: {
    height: 50,
  },
  locationHeadingText: {
    fontSize: 20,
  },
  locationnameText: {
    fontSize: 13,
  },
  locationDistanceConainter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    opacity: 0.9,
    padding: 7,
    borderRadius: '10%',
  },
  locationIcon: {
    width: 15,
  },
  distanceText: {
    color: '#fff',
    width: 40,
  },
  aboutBoxContainer: {},
  scrollContainer: {
    maxHeight: 150, // adjust height as needed
  },
  aboutHeading: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 20,
    marginBottom: 20,
  },
  aboutText: {
    fontSize: 15,
    lineHeight: 23,
  },
});

export default Profile;
