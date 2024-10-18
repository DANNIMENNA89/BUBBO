import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import booksApi from '../api/booksApi';
import { useIsFocused } from '@react-navigation/native'; 
const BookDetailScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const [book, setBook] = useState(null);
    const isFocused = useIsFocused(); 

    useEffect(() => {
        if (isFocused) {
            fetchBookDetails();
        }
    }, [isFocused]); 
    
    const fetchBookDetails = async () => {
        try {
            const response = await booksApi.get(`/books/${id}`);
            setBook(response.data);
        } catch (error) {
            console.error('Error al obtener los detalles del libro:', error);
            Alert.alert('Error', 'No se pudo cargar la información del libro.');
        }
    };

    const deleteBook = async () => {
        try {
            await booksApi.delete(`/books/${id}`);
            Alert.alert('Éxito', 'El libro ha sido eliminado.');
            navigation.goBack(); 
        } catch (error) {
            console.error('Error al eliminar el libro:', error);
            Alert.alert('Error', 'No se pudo eliminar el libro.');
        }
    };

    if (!book) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Cargando...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>Autor: {book.author}</Text>
            <Button title="Editar Libro" onPress={() => navigation.navigate('Edit Book', { id })} />
            <Button title="Eliminar Libro" color="red" onPress={deleteBook} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    author: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default BookDetailScreen;
