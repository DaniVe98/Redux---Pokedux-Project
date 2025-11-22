📘 README — Redux Pokédex (Pokedux)
🚀 Redux Pokédex (Pokedux)

Aplicación creada con React + Redux Toolkit que consume la API pública de Pokémon para mostrar una Pokédex interactiva, dinámica y totalmente responsive.

🎯 Descripción del proyecto

Este proyecto es una Pokedux, una Pokédex integrada con Redux Toolkit.
La aplicación consume la información desde una API y permite:

🔍 Buscar Pokémon por nombre desde el buscador en tiempo real.

🖼 Ver cada Pokémon con su imagen, nombre y habilidades.

⭐ Marcar y desmarcar como favorito haciendo click en la card.

🔄 Manejar todo el estado Global con Redux Toolkit (Pokémons, UI, favoritos, búsqueda, etc).

📱 Diseño responsive, adaptable a diferentes resoluciones.

Es un proyecto ideal para entender cómo manejar estado global moderno usando Redux Toolkit + Redux Thunk.

🛠 Tecnologías utilizadas

React

Redux Toolkit

React-Redux

Redux Thunk

Ant Design

Fetch API

CSS responsive

📡 Funcionalidades principales
🔄 Obtener Pokémons desde una API

La app consume datos de Pokémon desde la PokéAPI y los procesa para obtener:

Nombre

Imagen oficial

Habilidades

Estado de favorito

🔍 Búsqueda en tiempo real

Puedes escribir el nombre de un Pokémon y la lista se filtra automáticamente.

⭐ Favoritos con Redux Toolkit

Cada card tiene una estrella ⭐ para marcar como favorito.
Esto se guarda en el estado global de Redux, evitando re-renders innecesarios.

📱 Totalmente Responsive

La grilla se acomoda a diferentes resoluciones:

Desktop

Tablet

Móvil

📂 Estructura principal del proyecto
src/
├── components/
│   ├── Searcher.jsx
│   ├── PokemonList.jsx
│   └── PokemonCard.jsx
├── slices/
│   ├── dataSlice.js
│   └── uiSlice.js
├── statics/
│   └── logo.svg
├── App.js
└── index.js

▶️ Cómo ejecutar el proyecto
npm install
npm start

🧪 Build para producción
npm run build

🌐 Deploy

El proyecto puede desplegarse fácilmente en plataformas como:

Netlify

Vercel

GitHub Pages

👨‍💻 Autor

Proyecto creado por Daniel Vega, como parte del entrenamiento con Redux Toolkit y consumo de APIs.