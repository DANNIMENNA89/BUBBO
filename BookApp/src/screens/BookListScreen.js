import React, { useEffect, useState } from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import BookItem from '../components/BookItem';
import booksApi from '../api/booksApi';

const BookListScreen = ({ navigation }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, [books]);

    const fetchBooks = async () => {
        try {
            const response = await booksApi.get('/books');
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={books}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <BookItem book={item} onPress={(id) => navigation.navigate('Book Details', { id })} />
                )}
            />
            <Button title="Adds Book" onPress={() => navigation.navigate('Add Book')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default BookListScreen;
