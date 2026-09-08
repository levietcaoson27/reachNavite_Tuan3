import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
export class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text><AntDesign name="book" size={24} color="black" /></Text>
        <View style={styles.right}>
          <Text><Feather name="search" size={24} color="black" />  </Text>
          <Text><Feather name="shopping-cart" size={24} color="black" /></Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    height: 56,
    backgroundColor: '#666',
    width: '100%',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;