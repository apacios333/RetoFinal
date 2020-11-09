# React APP API TMDB
RETO Final. React APP API TMDB - 2020-06-BTC Fronted (Formación GeeksHubs)
Crear una APP con [React](https://es.reactjs.org/) capaz de interactuar con los Endpoints de la API proporcionada por [The MovieDb](https://developers.themoviedb.org/3).

#### Tabla de Contenidos
- [Introducción](#Introducción)
- [Contenido](#Contenido)
- [Pre-requisitos](#Pre-requisitos)
- [Instrucciones de Configuración](#Instrucciones-de-Configuración)
- [Instrucciones de Instalación](#Instrucciones-de-Instalación)
- [Uso](#Uso)
- [Herramientas utilizadas](#Herramientas-utilizadas)
- [Autor](#Autor)

## Introducción

Se ha creado una aplicación de una sola página (con [Create-React-App](https://github.com/facebook/create-react-app)) que consume datos de películas y series, de la API [TMDB](https://developers.themoviedb.org/3).

El diseño se ha elaborado en hojas de estilo [Sass](https://sass-lang.com/) con [FlexBox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

La funcionalidad y lógica de la web se implementan en [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) con [React-Router-Dom](https://github.com/ReactTraining/react-router), usando Hooks. Las peticiones a la API se realizan con [Axios](https://github.com/axios/axios), y la gestión del estado con [Redux](https://es.redux.js.org/). (Se realiza una versión sin redux y otra con él).

## Contenido 
Este proyecto tiene una rama: **RetoFinal** que incluye dos carpetas:
- react-peliculas: App realizada con react-router y hooks.
- react-peliculas-redux: App incluyendo la gestión del estado global con react-redux.

Cada carpeta tiene los siguientes componentes:
- Header, donde se renderizan Buttons y Searcher
- Footer
- Body, Genres, Movies (Movie, MovieDetails),Tvshow que, según el Router, se renderizan o renderizan otros componentes.
- reduxapp (sólo en la vesión de redux) para la gestión del estado.


## Pre-requisitos 
Se necesita para empezar a trabajar con la aplicación:

* Un editor de código (ejemplo [Virtual Studio Code](https://code.visualstudio.com/))
* Un gestor de paquetes (ejemplo [Node.js](https://nodejs.org/es/))
* Instalar [React-Router-dom](https://github.com/ReactTraining/react-router)
* Instalar [react-redux](https://es.redux.js.org/), y [redux](https://es.redux.js.org/)
* Instalar [Axios](https://github.com/axios/axios)
* Instalar [Node-Sass](https://github.com/sass/node-sass)


## Instrucciones de Configuración

Desde [Virtual Studio Code](https://code.visualstudio.com/) se instalan los paquetes [React-Router-Dom](https://github.com/ReactTraining/react-router), [react-redux](https://es.redux.js.org/), [redux](https://es.redux.js.org/) , [Axios](https://github.com/axios/axios), [Node-Sass](https://github.com/sass/node-sass) con [Node.js](https://nodejs.org/es/):

* $ npm install react-router-dom

    ($ yarn add react-router-dom)

* $ npm install react-redux redux

    ($ yarn add react-redux redux)
* $ npm install axios

    ($ yarn add axios)

* $ npm install node-sass

    ($ yarn add node-sass-install)

A continuación se instala y ejecuta la aplicación.

## Instrucciones de Instalación
Instalar usando npm (o yarn):

### `$ npm install --save react-peliculas`
($ yarn add react-peliculas)
o
### `$ npm install --save react-peliculas-redux`
($ yarn add react-peliculas-redux)



## Uso 

Tras la instalación, en el directorio del proyecto, se ejecuta la aplicación en modo desarrollo usando npm (o yarn):

### `npm start`

($ yarn start)

Se abre un servidor local, [http://localhost:3000](http://localhost:3000), para verlo en el navegador (La página se volverá a cargar si se realizan modificaciones).

En la aplicación, se muestra un encabezado con los botones "Popular", "Próximas", "Top10" y "Géneros" para retornar las películas más populares, próximas en venir, el top 10 o los géneros de películas. Además se incluyen dos buscadores: para buscar por título, películas o series respectivamente.
Al realizar una de esas peticiones se renderizan las películas mostrando el título, imagen y votación. En el caso de "Géneros" se muestra primero la lista de géneros. Al elegir un género, se renderizan las películas correspondientes.
Además, al elegir una de las películas o series, se enseña el detalle: título, año, tiempo de duración (en el caso de la serie, del capítulo), imagen, votos, resumen, título original, idioma, popularidad, géneros a los que pertenece, países de producción, casting (mostrando imagen del actor, nombre y personaje que interpreta), y, según corresponda, películas o series similares. (En el caso de las series, se incluyen el número de temporadas, pero no los países de producción).

## Herramientas utilizadas
* [REACT](https://es.reactjs.org/) - Biblioteca de JavaScript para construir interfaces de usuario.
* [React-Router-Dom](https://github.com/ReactTraining/react-router) - Permite la navegación de una vista a la siguiente al cambiar la ruta del navegador sin recargar la página.
* [Redux](https://es.redux.js.org/) - Biblioteca para el manejo del estado global de la aplicación.
* [Axios](https://github.com/axios/axios) - Biblioteca de javascript para hacer solicitudes a un servidor como cliente HTTP.
* [Sass](https://sass-lang.com/) - Hojas de estilo para los componentes. [Node-Sass](https://github.com/sass/node-sass) compila Sass a CSS.
* [Layout Flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Modelo de Layout Caja Flexible: Mejorar alineación de elementos y distribuir el espacio.
* [JavaScript-ES6](https://developer.mozilla.org/es/docs/Web/JavaScript) - Lenguaje de programación
* [GIT](https://git-scm.com/) - Método de control de versiones de código

## Autor
* **Alicia Pacios Martínez** - *Trabajo Inicial* - [apacios333](https://github.com/apacios333)
