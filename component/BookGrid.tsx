import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

type Book = {
  id: number;
  title: string;
  author: string; // Đã bổ sung trường này để đồng bộ với App.tsx
  price: string;
  image: string;
};

type BookGridProps = {
  books: Book[];
};

export default function BookGrid({ books }: BookGridProps) {
  return (
    <View style={styles.container}>
      {books.map((book) => (
        <View key={book.id} style={styles.item}>
          <Image
            source={{ uri: book.image }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.info}>
            <Text style={styles.title} numberOfLines={2}>
              {book.title}
            </Text>
            <Text style={styles.price}>
              {book.price}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '48%',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 4,
    borderRadius: 8,
    backgroundColor: '#ddd',
  },
  info: {
    paddingTop: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
  },
  price: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
  },
});