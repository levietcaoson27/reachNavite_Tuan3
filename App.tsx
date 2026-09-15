import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';

import Header from './component/Header';
import LessonTabs from './component/LessonTabs';
import BookCard from './component/BookCard';
import BookGrid from './component/BookGrid';

type Book = {
  id: number;
  title: string;
  author: string;
  price: string;
  image: string;
};

export default function App() {
  const [page, setPage] = useState<number>(2);

  const categories = [
    'Văn học',
    'Kinh tế',
    'Thiếu nhi',
    'Truyện tranh',
    'Ngoại ngữ',
    'Lịch sử',
  ];

  const books: Book[] = [
    {
      id: 1,
      title: 'Đắc Nhân Tâm',
      author: 'Dale Carnegie',
      price: '86.000đ',
      image: 'https://m.media-amazon.com/images/I/71vK4Jx6yWL.jpg',
    },
    {
      id: 2,
      title: 'Nhà Giả Kim',
      author: 'Paulo Coelho',
      price: '79.000đ',
      image: 'https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg',
    },
    {
      id: 3,
      title: 'Tuổi Trẻ Đáng Giá Bao Nhiêu',
      author: 'Rosie Nguyễn',
      price: '90.000đ',
      image: 'https://m.media-amazon.com/images/I/71M7s7xYqEL.jpg',
    },
    {
      id: 4,
      title: 'Harry Potter và Hòn Đá Phù Thủy',
      author: 'J. K. Rowling',
      price: '120.000đ',
      image: 'https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg',
    },
    {
      id: 5,
      title: 'Cho Tôi Xin Một Vé Đi Tuổi Thơ',
      author: 'Nguyễn Nhật Ánh',
      price: '95.000đ',
      image: 'https://m.media-amazon.com/images/I/71Q1tP2pY9L.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      <Header />

      <LessonTabs
        page={page}
        setPage={setPage}
      />

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {page === 1 && (
          <View>
            <View style={styles.chipsContainer}>
              {categories.map((category) => (
                <View
                  key={category}
                  style={styles.chip}
                >
                  <Text>{category}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {page === 2 && (
          <View>
            {books.map((book) => (
              <BookCard
                key={book.id}
                image={book.image}
                title={book.title}
                author={book.author}
                price={book.price}
              />
            ))}
          </View>
        )}

        {page === 3 && (
          <View>
            <BookGrid books={books} />
          </View>
        )}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4169e1',
  },
});