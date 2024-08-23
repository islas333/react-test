# Star War Project

Este es un proyecto de frontend construido con Vite y React. El proyecto muestra una interfaz de usuario para interactuar con datos relacionados con Star Wars.

## Características del Proyecto

- **Interfaz de Usuario Intuitiva**: Diseñada con Material-UI para una experiencia de usuario moderna y responsiva.
- **Autenticación**: Implementación de autenticación básica utilizando tokens almacenados en `localStorage`.
- **Búsqueda y Filtrado**: Funcionalidad para buscar y filtrar datos relacionados con Star Wars.
- **Despliegue Rápido**: Fácil de desplegar utilizando un servidor estático como `serve`.
- **Optimización para Producción**: Construcción optimizada para producción utilizando Vite.
- **Componentes Reutilizables**: Uso de componentes reutilizables para una mejor mantenibilidad y escalabilidad del código.
- **Soporte para Múltiples Dispositivos**: Diseño responsivo que se adapta a diferentes tamaños de pantalla.
- **Configuración Sencilla**: Fácil de configurar y ejecutar en un entorno de desarrollo local.

## Tecnologías Utilizadas

- **React**: Una biblioteca de JavaScript para construir interfaces de usuario. React permite crear componentes reutilizables y gestionar el estado de la aplicación de manera eficiente.
- **Vite**: Un entorno de desarrollo rápido y ligero para proyectos de frontend. Vite proporciona una experiencia de desarrollo rápida con recarga en caliente y una construcción optimizada para producción.
- **Material-UI**: Una biblioteca de componentes de interfaz de usuario para React que implementa los principios de diseño de Material Design de Google. Material-UI facilita la creación de interfaces de usuario atractivas y consistentes.
- **JavaScript (ES6+)**: El lenguaje de programación utilizado para desarrollar la lógica de la aplicación. Se utilizan características modernas de JavaScript como funciones flecha, desestructuración y plantillas de cadena.
- **HTML5**: El lenguaje de marcado utilizado para estructurar el contenido de la aplicación.
- **CSS3**: Utilizado para estilizar la aplicación y hacerla visualmente atractiva. Se pueden utilizar tanto estilos en línea como archivos CSS externos.
- **Axios**: Una biblioteca de cliente HTTP basada en promesas para realizar solicitudes a APIs. Axios facilita la comunicación con el backend y la gestión de respuestas y errores.
- **LocalStorage**: Una API de almacenamiento web que permite almacenar datos de manera persistente en el navegador del usuario. En este proyecto, se utiliza para almacenar tokens de autenticación.

## Estructura del Proyecto

- `index.html`: Archivo principal HTML que carga el proyecto.
- `src/`: Carpeta que contiene todos los archivos fuente de React.
- `assets/`: Carpeta que contiene los recursos estáticos como imágenes y estilos.

## Instalación

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/star-war-project.git
   cd star-war-project

2. Credenciales de sistema:
   ```sh
   user: admin
   password: admin

3. Para desplegar el proyecto, puedes usar un servidor estático como serve::
   ```sh
   npm install -g serve
   serve -s dist

4. Abre tu navegador y navega a la URL proporcionada por serve, generalmente http://localhost:5000.

## Ejecutar el Ambiente de Desarrollo

Para construir el proyecto para producción, ejecuta:

1. Instala dependencias y levanta ambiente de dev:
   ```sh
   npm install
   npm run dev

1. Crear Build del proyecto:
   ```sh
   npm run build