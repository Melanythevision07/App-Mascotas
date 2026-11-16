# HuellaAmiga

## Resumen del proyecto

HuellaAmiga es una pequeña aplicación web creada con React y Vite. Actualmente funciona como una base inicial para una interfaz de navegación y landing page, con una barra superior llamada `Navbar` y una vista principal en `App`.

El proyecto demuestra el uso de:

- React para crear componentes reutilizables
- Vite como entorno de desarrollo y compilación
- CSS para dar estilo a la interfaz
- componentes como `Navbar` para estructurar la navegación

## ¿Qué hace cada parte?

### Archivos principales

- `package.json`: define el proyecto, las dependencias y los scripts para ejecutar, compilar y verificar la aplicación.
- `vite.config.js`: configuración de Vite, el bundler y servidor de desarrollo.
- `index.html`: archivo HTML base donde se monta la aplicación React.
- `src/main.jsx`: archivo de entrada que renderiza la app en el DOM.
- `src/App.jsx`: componente principal que reúne la vista principal de la aplicación.
- `src/index.css`: estilos globales del proyecto.
- `src/App.css`: estilos específicos de la vista principal.
- `src/components/Navbar.jsx`: componente que muestra la barra de navegación.
- `public/`: archivos públicos como iconos y recursos estáticos.

### Componentes

#### `App`
Es el componente principal de la aplicación. Aquí se arma la interfaz visible y se integran otros componentes, como la barra de navegación.

#### `Navbar`
Es la barra superior con el nombre `HuellaAmiga` y dos enlaces:

- Inicio
- Favoritos

#### `main.jsx`
Este archivo conecta la app con el navegador. Busca el elemento con id `root` en `index.html` y renderiza el componente `App` dentro de él.

## Cómo iniciar el proyecto

### 1. Instalar dependencias

Desde la carpeta del proyecto ejecuta:

```bash
npm install
```

### 2. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Esto levanta la app en modo desarrollo y normalmente la abrirá en una URL como:

```bash
http://localhost:5173
```

### 3. Construir la aplicación para producción

```bash
npm run build
```

Esto genera una versión lista para producción en la carpeta `dist`.

### 4. Previsualizar la build

```bash
npm run preview
```

## Comandos útiles

- `npm run dev`: inicia el entorno de desarrollo
- `npm run build`: compila la aplicación para producción
- `npm run preview`: previsualiza la versión compilada
- `npm run lint`: revisa el código con ESLint

## Tecnologías usadas

- React
- Vite
- JavaScript
- CSS

## Nota

Este proyecto aún está en una etapa inicial y sirve como base para continuar desarrollando la interfaz, agregar páginas, conectar con una API o mejorar la navegación y diseño.
