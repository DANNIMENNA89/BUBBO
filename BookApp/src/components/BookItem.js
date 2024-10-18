import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BookItem = ({ book, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress(book.id)} style={styles.item}>
            <Text style={styles.title}>{book.title}</Text>
            <Text>{book.author}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default BookItem;
