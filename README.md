# FullStackBack

Este repositorio contiene el backend de la aplicación web FullStack, construido con Node.js, Express y MongoDB.

## Contenido

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)
- [API Endpoints](#api-endpoints)
- [Contribuciones](#contribuciones)

## Descripción

FullStackBack es el backend de una aplicación web diseñada para el entretenimiento infantil a modo de Videojuego. Utiliza Node.js y Express para la lógica del servidor y Mongoose para interactuar con una base de datos MongoDB.

## Tecnologías

- Node.js
- Express
- Mongoose
- MongoDB

## Instalación

Para clonar y ejecutar este proyecto, sigue estos pasos:

1. Clona el repositorio:

    ```sh
    git clone https://github.com/IntAgustinCuevas/FullStackBack.git
    cd FullStackBack
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```

3. Configura las variables de entorno:

    Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:

    ```env
    MONGO_URI=your_mongo_uri
    PORT=your_port
    JWT_SECRET=your_jwt_secret
    ```

4. Inicia el servidor:

    ```sh
    npm start
    ```

## Uso

### Endpoints

A continuación se detallan algunos de los endpoints disponibles en la API. Para una lista completa, consulta el código fuente.

- `GET /api/items` - Obtener todos los ítems
- `POST /api/items` - Crear un nuevo ítem
- `GET /api/items/:id` - Obtener un ítem por ID
- `PUT /api/items/:id` - Actualizar un ítem por ID
- `DELETE /api/items/:id` - Eliminar un ítem por ID

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request con tus mejoras o nuevos features.


