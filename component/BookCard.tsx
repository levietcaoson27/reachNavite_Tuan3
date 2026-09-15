import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type BookCardProps = {
  image: string;
  title: string;
  author: string;
  price: string;
};

export default function BookCard({
  image,
  title,
  author,
  price,
}: BookCardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: image }}
        style={styles.cover}
      />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.author} numberOfLines={1}>
          {author}
        </Text>
        <Text style={styles.price}>
          {price}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 140,

    flexDirection: 'row',
    alignItems: 'flex-start',

    padding: 12,
    marginBottom: 12,

    backgroundColor: '#eee',
    borderRadius: 8,
  },

  cover: {
    width: 80,
    height: 110,
    borderRadius: 6,

    backgroundColor: '#ccc',
  },

  info: {
    flex: 1,
    height: 110,

    marginLeft: 16,

    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
  },

  author: {
    fontSize: 14,
    color: '#666',
  },

  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});
