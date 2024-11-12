import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';

const SearchPage = () => {
  // Sample data to search through
  const data = [

  ];

  // State to store the search query and filtered results
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  // Function to handle search input changes
  const handleSearch = (text) => {
    setQuery(text);
    if (text.trim() === '') {
      setFilteredData(data); // Show all items when input is empty
    } else {
      const filtered = data.filter(item => 
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered); // Show filtered results
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Engine</Text>
      
      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search here..."
        value={query}
        onChangeText={handleSearch}
      />

      {/* Display search results */}
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.noResults}>No results found</Text>
      )}
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemText: {
    fontSize: 18,
  },
  noResults: {
    textAlign: 'center',
    fontSize: 18,
    color: '#888',
    marginTop: 20,
  },
});
