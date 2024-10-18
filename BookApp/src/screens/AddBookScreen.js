import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import booksApi from '../api/booksApi';

const AddBookScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const addBook = async () => {
        if (!title || !author) {
            Alert.alert('Error', 'Todos los campos son obligatorios.');
            return;
        }

        try {
            await booksApi.post('/books', { title, author });
            Alert.alert('Éxito', 'El libro ha sido agregado.');
            navigation.goBack(); 
        } catch (error) {
            console.error('Error al agregar el libro:', error);
            Alert.alert('Error', 'No se pudo agregar el libro.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Título"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Autor"
                value={author}
                onChangeText={setAuthor}
            />
            <Button title="Agregar Libro" onPress={addBook} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 15,
        fontSize: 18,
        paddingHorizontal: 10,
    },
});

export default AddBookScreen;
