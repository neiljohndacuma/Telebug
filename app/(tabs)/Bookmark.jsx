import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

const Bookmark = () => {
  // State to store the bookmarks
  const [bookmarks, setBookmarks] = useState([]);
  const [newBookmark, setNewBookmark] = useState('');

  // Function to handle adding a new bookmark
  const addBookmark = () => {
    if (newBookmark.trim()) {
      setBookmarks([...bookmarks, newBookmark]);
      setNewBookmark('');
    }
  };

  // Function to remove a bookmark
  const removeBookmark = (index) => {
    const updatedBookmarks = bookmarks.filter((_, i) => i !== index);
    setBookmarks(updatedBookmarks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Bookmarks</Text>

      {/* Input field to add a new bookmark */}
      <TextInput
        style={styles.input}
        placeholder="Add a new bookmark"
        value={newBookmark}
        onChangeText={setNewBookmark}
      />
      <Button title="Add Bookmark" onPress={addBookmark} />

      {/* List of bookmarks */}
      <FlatList
        data={bookmarks}
        renderItem={({ item, index }) => (
          <View style={styles.bookmarkItem}>
            <Text style={styles.bookmarkText}>{item}</Text>
            <TouchableOpacity onPress={() => removeBookmark(index)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Bookmark;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  bookmarkItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bookmarkText: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
