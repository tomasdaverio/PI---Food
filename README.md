![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# Individual Project - Henry Food

## Objetivos Académicos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera de Web Full Stack Developer.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

## Instalación

Ejecutar el comando <b>npm install</b> para instalar todas las dependencias necesarias del proyecto.

## Configuración local

El proyecto cuenta con dos carpetas: `api` y `client`. En estas carpetas está el código del back-end y el front-end respectivamente.

Para correr localmente el proyecto, en la carpeta `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
apiKeyb= spoonacularapikey
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. 

Reemplazar `spoonacularapikey` con tus propia apikey de spoonacular (https://spoonacular.com/registeremail)

Adicionalmente será necesario que crees desde psql una base de datos llamada `food` (https://spoonacular.com/food-api)

El contenido de `client` fue creado usando: Create React App.

## Ejecución del proyecto

Una vez realizado el comando npm install, y el apartado anterior de Configuración local, se puede levantar el proyecto abriendo dos terminales: 

- Una para el servidor, en la ubicación /api, y se ejecuta el comando <b>npm start</b> (comprobar en la terminal el mensaje de consola 'listening at PORT')

- Otra para el cliente, en la ubicación /client, y se ejecuta el comando <b>npm start</b> (comprobar en la terminal el mensaje de consola 'listening at PORT')

## Características del proyecto

El proyecto se basa en la api externa [spoonacular](https://spoonacular.com/food-api), y a partir de esta se logra: 

- Buscar recetas por nombre
- Filtrarlas / Ordenarlas
- Crear nuevas recetas propias (esta funcionalidad puede ser deshabilitada fácilmente desactivando el botón de crear receta en el formulario de creación de recetas.

Aclaración: Para las funcionalidades de filtrado y ordenamiento no se utilizan los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados, sino que son realizados en el back-end. 

### Endpoints/Flags utilizados:

- GET <https://api.spoonacular.com/recipes/complexSearch>
  - Para obtener mayor información sobre las recetas, se agrega el flag `&addRecipeInformation=true`
- GET <https://api.spoonacular.com/recipes/{id}/information>

### Estilos (CSS)

El estilo del proyecto se encuentra realizado con CSS modules, sin uso de ninguna librería externa. 

### Tecnologías utilizadas

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - PostgreSQL
- [ ] NodeJS

### Frontend

Pantallas/Rutas, con el siguiente contenido: 

__Pagina inicial__: Landing Page:

- [ ] Imagen representativa del proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: 

- [ ] Input de búsqueda para encontrar recetas por nombre (validado con JS)
- [ ] Área donde se muestra el listado de recetas, con su:
  - Imagen
  - Nombre
  - Tipo de dieta (vegetariano, vegano, apto celíaco, etc)
- [ ] Botones/Opciones para filtrar por por tipo de dieta
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las recetas por orden alfabético y por health score (nivel de comida saludable).
- [ ] Paginado para ir buscando y mostrando las siguientes recetas, 9 recetas por pagina, mostrando las primeros 9 en la primer pagina.

__IMPORTANTE__: Dentro de la Ruta Principal se muestran tanto las recetas traidas desde la API como así también las de la base de datos. Debido a que en la API existen alrededor de 5 mil recetas, por cuestiones de performance se toma la simplificación de obtener y paginar las primeras 100.

__Ruta de detalle de receta__: 

- [ ] Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
- [ ] Resumen del plato
- [ ] Nivel de "comida saludable" (health score)
- [ ] Paso a paso

__Ruta de creación de recetas__:

- [ ] Un formulario __controlado con JavaScript__ con los siguientes campos:
  - Nombre
  - Resumen del plato
  - Nivel de "comida saludable" (health score)
  - Paso a paso
- [ ] Posibilidad de seleccionar/agregar uno o más tipos de dietas
- [ ] Botón/Opción para crear una nueva receta

### Base de datos

El modelo de la base de datos contiene las siguientes entidades:

- [ ] Receta con las siguientes propiedades:
  - ID: 
  - Nombre 
  - Resumen del plato 
  - Nivel de "comida saludable" (health score)
  - Paso a paso
- [ ] Tipo de dieta con las siguientes propiedades:
  - ID
  - Nombre

__IMPORTANTE__: Debido a la numeración de la API, los ID´s generados son a partir del número 1 en adelante para evitar conflictos.

### Back-end

Se desarrolla un servidor en Node/Express con las siguientes rutas:

- [ ] __GET /recipes?name="..."__:
  - Obtiene un listado de las recetas que contengan la palabra ingresada como query parameter
  - Si no existe ninguna receta muestra un mensaje adecuado
- [ ] __GET /recipes/{idReceta}__:
  - Obtiene el detalle de una receta en particular
  - Trae sólo los datos pedidos en la ruta de detalle de receta
  - Incluye los tipos de dieta asociados
- [ ] __POST /recipes__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
  - Crea una receta en la base de datos relacionada con sus tipos de dietas.
- [ ] __GET /diets__:
  - Obtiene todos los tipos de dieta posibles
  - En una primera instancia, cuando no existe ninguna, se precarga la base de datos con un set de todos los tipos de dietas existentes
  en spoonacular.
