import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import booksApi from '../api/booksApi';

const EditBookScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        fetchBookDetails();
    }, []);

    const fetchBookDetails = async () => {
        try {
            const response = await booksApi.get(`/books/${id}`);
            const { title, author } = response.data;
            setTitle(title);
            setAuthor(author);
        } catch (error) {
            console.error('Error al obtener los detalles del libro:', error);
            Alert.alert('Error', 'No se pudo cargar la información del libro.');
        }
    };

    const updateBook = async () => {
        if (!title || !author) {
            Alert.alert('Error', 'Todos los campos son obligatorios.');
            return;
        }

        try {
            await booksApi.put(`/books/${id}`, { title, author });
            Alert.alert('Éxito', 'El libro ha sido actualizado.');
            navigation.goBack(); 
        } catch (error) {
            console.error('Error al actualizar el libro:', error);
            Alert.alert('Error', 'No se pudo actualizar el libro.');
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
            <Button title="Actualizar Libro" onPress={updateBook} />
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

export default EditBookScreen;
