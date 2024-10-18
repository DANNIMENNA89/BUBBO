import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookListScreen from './src/screens/BookListScreen';
import BookDetailScreen from './src/screens/BookDetailScreen';
import AddBookScreen from './src/screens/AddBookScreen';
import EditBookScreen from './src/screens/EditBookScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Books" component={BookListScreen} />
                <Stack.Screen name="Book Details" component={BookDetailScreen} />
                <Stack.Screen name="Add Book" component={AddBookScreen} />
                <Stack.Screen name="Edit Book" component={EditBookScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
