import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

type LessonTabsProps = {
  page: number;
  setPage: (page: number) => void;
};

export default function LessonTabs({
  page,
  setPage,
}: LessonTabsProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.button,
          page === 1 && styles.activeButton,
        ]}
        onPress={() => setPage(1)}
      >
        <Text
          style={[
            styles.text,
            page === 1 && styles.activeText,
          ]}
        >
          Bài 1
        </Text>
      </Pressable>
  
      <Pressable
        style={[
          styles.button,
          page === 2 && styles.activeButton,
        ]}
        onPress={() => setPage(2)}
      >
        <Text
          style={[
            styles.text,
            page === 2 && styles.activeText,
          ]}
        >
          Bài 2
        </Text>
      </Pressable>

      <Pressable
        style={[
          styles.button,
          page === 3 && styles.activeButton,
        ]}
        onPress={() => setPage(3)}
      >
        <Text
          style={[
            styles.text,
            page === 3 && styles.activeText,
          ]}
        >
          Bài 3
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    backgroundColor: '#f2f2f2',
  },

  button: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4169e1',
    borderRadius: 8,
    backgroundColor: '#fff',
  },

  activeButton: {
    backgroundColor: '#4169e1',
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4169e1',
  },

  activeText: {
    color: '#fff',
  },
});