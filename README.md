# BUBBO - Prueba Técnica

Este proyecto es una prueba técnica para evaluar habilidades en el desarrollo de una aplicación completa utilizando **Node.js**, **Express**, **Firebase**, y **React Native**. La aplicación se divide en dos partes: una **API REST** para la gestión de libros y una **aplicación móvil** que consume dicha API para mostrar los datos.

## Estructura del proyecto

El proyecto tiene la siguiente estructura de carpetas:


## Parte 1: Desarrollo de la API REST

### Tecnologías utilizadas
- **Node.js**
- **Express**
- **Firebase Firestore** como base de datos

### Configuración

1. **Crear un proyecto en Firebase**: 
   - Configura Firebase Firestore y genera un archivo de credenciales para el servicio de administrador.
   - Añade las credenciales en un archivo `.env` en la carpeta `backend`:
     ```
     FIREBASE_PROJECT_ID=<tu-project-id>
     FIREBASE_CLIENT_EMAIL=<tu-client-email>
     FIREBASE_PRIVATE_KEY=<tu-private-key>
     ```

2. **Instalación de dependencias**:
   - Navega a la carpeta `backend` y ejecuta:
     ```bash
     npm install
     ```

3. **Ejecutar el servidor**:
   - Para iniciar el servidor:
     ```bash
     npm start
     ```
   - El servidor estará disponible en `http://localhost:3000`.

### Endpoints de la API

- `GET /books`: Devuelve una lista de todos los libros.
- `GET /books/{id}`: Devuelve los detalles de un libro específico.
- `POST /books`: Crea un nuevo libro.
- `PUT /books/{id}`: Actualiza la información de un libro.
- `DELETE /books/{id}`: Elimina un libro específico.

## Parte 2: Desarrollo de la aplicación móvil en React Native

### Tecnologías utilizadas
- **React Native**
- **React Navigation** para la navegación
- **Axios** para el consumo de la API REST

### Configuración

1. **Instalación de dependencias**:
   - Navega a la carpeta `mobile` y ejecuta:
     ```bash
     npm install
     ```

2. **Ejecutar la aplicación móvil**:
   - Para iniciar la aplicación en un emulador o dispositivo físico:
     ```bash
     npx react-native run-android
     ```
   - O para iOS:
     ```bash
     npx react-native run-ios
     ```

### Funcionalidades de la aplicación móvil

- **Mostrar una lista de libros** en la pantalla principal.
- **Ver detalles de un libro** al hacer clic en él.
- **Agregar un nuevo libro** con un formulario.
- **Editar y eliminar libros** existentes.

## Requisitos para correr el proyecto

- **Node.js** y **npm** deben estar instalados.
- **Firebase** configurado correctamente.
- **React Native CLI** instalado para ejecutar la aplicación móvil.






