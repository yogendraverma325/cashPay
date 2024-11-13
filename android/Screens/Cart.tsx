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
function Cart({navigation}): React.JSX.Element {
  const cartProducts = [
    {
      id: '1',
      title: 'Wireless Headphones',
      image:
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097',
      qty: 1,
      price: 50.0,
    },
    {
      id: '2',
      title: 'Smartphone',
      image:
        'https://i.guim.co.uk/img/media/2ce8db064eabb9e22a69cc45a9b6d4e10d595f06/392_612_4171_2503/master/4171.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=45b5856ba8cd83e6656fbe5c166951a4',
      qty: 2,
      price: 299.99,
    },
    {
      id: '3',
      title: 'Laptop',
      image:
        'https://cdn.thewirecutter.com/wp-content/media/2024/07/editing-laptop-2048px-233661.jpg?auto=webp&quality=75&width=1024',
      qty: 1,
      price: 899.0,
    },
    {
      id: '4',
      title: 'Bluetooth Speaker',
      image:
        'https://rukminim2.flixcart.com/image/850/1000/xif0q/speaker/mobile-tablet-speaker/s/o/9/m415sp-portable-bluetooth-speaker-dynamic-thunder-sound-with-original-imah259khqvdbxke.jpeg?q=90&crop=false',
      qty: 1,
      price: 75.5,
    },
    {
      id: '5',
      title: 'Gaming Mouse',
      image:
        'https://images-cdn.ubuy.co.in/633b97e462e47a4eee2183bd-inhanda-wired-rgb-gaming-mouse-high.jpg',
      qty: 3,
      price: 25.99,
    },
    {
      id: '6',
      title: 'Mechanical Keyboard',
      image:
        'https://i.pcmag.com/imagery/articles/044a4pYZNk91QwMe8l3DSM1-5.fit_lim.v1708624706.jpg',
      qty: 2,
      price: 60.0,
    },
    {
      id: '7',
      title: 'Smartwatch',
      image:
        'https://images-cdn.ubuy.co.in/633b12488d2edc65997f4c20-smart-watch-bluetooth-smartwatch-touch.jpg',
      qty: 1,
      price: 120.0,
    },
    {
      id: '8',
      title: 'External Hard Drive',
      image:
        'https://rukminim2.flixcart.com/image/850/1000/k3dc7m80pkrrdj/external-hard-drive/hdd/7/5/m/wd-wdbhhg0010bbk-eesn-original-imafmkq8yb5wnsuh.jpeg?q=90&crop=false',
      qty: 1,
      price: 75.0,
    },
    {
      id: '9',
      title: 'Portable Charger',
      image:
        'https://images-cdn.ubuy.co.in/66d0af16533fd916fe043358-portable-charger-power-bank-external.jpg',
      qty: 2,
      price: 19.99,
    },
    {
      id: '10',
      title: 'Wireless Earbuds',
      image:
        'https://omnichannelimages.global.ssl.fastly.net/prod/dsv/fe/FE-ZEN2-CO_650_1.JPG?width=590&height=767&quality=95&format=webp',
      qty: 1,
      price: 45.0,
    },
  ];

  const Item = ({
    itemData,
  }: {
    itemData: {
      id: string;
      title: string;
      image: string;
      qty: number;
      price: number;
    };
  }) => (
    <View style={styles.cardContainer}>
      <View style={styles.productImageContainer}>
        <Image
          source={{
            uri: itemData.image,
          }}
          resizeMode="cover"
          style={styles.productImage}
        />
      </View>
      <View style={styles.titlePriceQtyContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{itemData.title}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>
            {'\u20B9'}
            {itemData.price}
          </Text>
        </View>
        <View style={styles.whistlistQtyContainer}>
          <View style={styles.whistlistContainer}>
            <Icon name="heart-o" size={20} color="black" />
          </View>
          <View style={styles.qtyContainer}>
            <Icon name="minus" style={styles.plusMinus}></Icon>
            <Text>{itemData.qty}</Text>
            <Icon name="plus" style={styles.plusMinus}></Icon>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.mainContainer}>
      <View style={styles.listContainer}>
        <FlatList
          data={cartProducts}
          renderItem={({item}) => <Item itemData={item} />}
        />
      </View>
      <View style={styles.totalCheckoutContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.fontFamilyClass}>Total</Text>
          <Text style={styles.fontFamilyClass}> {'\u20B9'} 1200</Text>
        </View>
        <View style={styles.checkoutContainer}>
          <Text style={[styles.checkouttext, styles.fontFamilyClass]}>
            Checkout
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fontFamilyClass: {
    fontFamily: 'Quicksand-Bold',
  },
  totalCheckoutContainer: {
    width: '100%',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  totalContainer: {
    width: '50%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center', // centers vertically
    alignItems: 'center', // centers horizontally
    height: 50,
  },
  checkoutContainer: {
    width: '50%',
    height: 50,
    flex: 1,
    justifyContent: 'center', // centers vertically
    alignItems: 'center', // centers horizontally,
    backgroundColor: 'orange',
    borderRadius: 10,
  },
  checkouttext: {
    color: '#fff',
    fontSize: 18,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  listContainer: {
    backgroundColor: '#fff',
    height: '90%',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 13,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
    borderColor: '#ddd',
    margin: 9,
  },
  productImageContainer: {},
  productImage: {
    borderRadius: 20,
    height: 120,
    width: 120,
  },
  titlePriceQtyContainer: {
    gap: 11,
    marginLeft: 15,
    flex: 1,
    flexDirection: 'column',
  },
  titleContainer: {},
  priceContainer: {},
  whistlistQtyContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  whistlistContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyContainer: {
    width: '30%',
    flex: 1,
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
  },
  price: {
    fontSize: 20,
  },
  plusMinus: {},
});

export default Cart;
