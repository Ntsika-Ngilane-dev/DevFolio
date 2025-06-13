import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BlogScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blog</Text>
      <Text>View and edit blog posts here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 }
});

export default BlogScreen;
