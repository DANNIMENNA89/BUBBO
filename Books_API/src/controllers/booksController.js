const db = require('../config/firebaseConfig');

// Obtener todos los libros
const getAllBooks = async (req, res) => {
    try {
        const booksSnapshot = await db.collection('books').get();
        const books = booksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los libros' });
    }
};

// Obtener un libro por su ID
const getBookById = async (req, res) => {
    try {
        const bookRef = db.collection('books').doc(req.params.id);
        const bookSnapshot = await bookRef.get();

        if (!bookSnapshot.exists) {
            return res.status(404).json({ error: 'Libro no encontrado' });
        }

        res.status(200).json({ id: bookSnapshot.id, ...bookSnapshot.data() });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el libro' });
    }
};

// Crear un nuevo libro
const createBook = async (req, res) => {
    try {
        const newBook = req.body;
        const bookRef = await db.collection('books').add(newBook);
        res.status(201).json({ id: bookRef.id, ...newBook });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el libro' });
    }
};

// Actualizar un libro
const updateBook = async (req, res) => {
    try {
        const bookRef = db.collection('books').doc(req.params.id);
        await bookRef.update(req.body);
        res.status(200).json({ id: req.params.id, ...req.body });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el libro' });
    }
};

// Eliminar un libro
const deleteBook = async (req, res) => {
    try {
        const bookRef = db.collection('books').doc(req.params.id);
        await bookRef.delete();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el libro' });
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
};
