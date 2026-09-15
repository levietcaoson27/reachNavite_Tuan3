import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

export class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <AntDesign name="book" size={24} color="white" />

        <View style={styles.right}>
          <Feather name="search" size={24} color="white" />
          <Feather
            name="shopping-cart"
            size={24}
            color="white"
            style={styles.cart}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 56,
    width: '100%',
    paddingHorizontal: 16,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: '#666',
  },

  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cart: {
    marginLeft: 20,
  },
});

export default Header;