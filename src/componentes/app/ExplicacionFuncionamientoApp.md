# Documentación de la Aplicación NASA Foto del Día

## Descripción

Esta aplicación interactiva permite a los usuarios visualizar la **Foto del Día** proporcionada por la NASA, seleccionando una fecha específica. Además, incluye una galería para explorar imágenes relacionadas con el espacio.

---

## Funcionalidades Principales

1. **Seleccionar una fecha para obtener la Foto del Día:**

   - Los usuarios pueden seleccionar una fecha específica para ver la imagen correspondiente junto con su título y descripción.

2. **Galería de imágenes espaciales:**

   - Los usuarios pueden explorar una galería interactiva de imágenes relacionadas con el espacio.

3. **Mensajes de error claros:**

   - Si ocurre un problema al obtener los datos de la API, se muestra un mensaje de error que desaparece al intentar una nueva búsqueda.

---

## Estructura de la Aplicación

### Componentes

1. **FotoDiaNasa:**

   - Permite a los usuarios seleccionar una fecha para ver la Foto del Día.
   - Utiliza el componente `BotonFecha` para realizar la selección de fechas.
   - Muestra el título, la imagen y la descripción de la foto seleccionada.

2. **GaleriaNasa:**

   - Muestra una galería interactiva de imágenes espaciales.
   - Carga las imágenes relacionadas con el término "planets" desde la API de la NASA.

3. **BotonFecha:**

   - Componente reutilizable que permite a los usuarios seleccionar y enviar una fecha.

4. **SeleccionNasa:**

   - Permite alternar entre los componentes `FotoDiaNasa` y `GaleriaNasa` mediante botones.

---

## Solicitudes a la API de la NASA

### 1. **Foto del Día**

- **Endpoint:** `https://api.nasa.gov/planetary/apod`
- **Método:** GET
- **Parámetros requeridos:**
  - `api_key`: Tu clave de API de la NASA.
  - `date`: Fecha específica en formato `YYYY-MM-DD`.
- **Ejemplo de solicitud:**
  ```bash
  https://api.nasa.gov/planetary/apod?api_key=TU_API_KEY&date=2023-01-01
  ```
- **Respuesta de ejemplo:**
  ```json
  {
    "date": "2023-01-01",
    "explanation": "Explicación de la imagen...",
    "media_type": "image",
    "title": "Título de la imagen",
    "url": "https://example.com/imagen.jpg"
  }
  ```

### 2. **Galería de Imágenes**

- **Endpoint:** `https://images-api.nasa.gov/search`
- **Método:** GET
- **Parámetros requeridos:**
  - `q`: Término de búsqueda (por ejemplo, "planets").
  - `media_type`: Tipo de contenido, como "image".
- **Ejemplo de solicitud:**
  ```bash
  https://images-api.nasa.gov/search?q=planets&media_type=image
  ```
- **Respuesta de ejemplo:**
  ```json
  {
    "collection": {
      "items": [
        {
          "links": [
            { "href": "https://example.com/imagen.jpg" }
          ],
          "data": [
            {
              "title": "Título de la imagen",
              "description": "Descripción de la imagen..."
            }
          ]
        }
      ]
    }
  }
  ```

---

## Flujo de la Aplicación

1. **Inicio:**

   - La aplicación carga un diseño principal con botones para alternar entre la Foto del Día y la Galería.

2. **Foto del Día:**

   - El usuario selecciona una fecha utilizando el componente `BotonFecha`.
   - Se realiza una solicitud a la API de la NASA para obtener la imagen, título y descripción correspondientes a esa fecha.

3. **Galería:**

   - La galería se inicializa con imágenes relacionadas con "planets".
   - Cada imagen se muestra con su título y es interactiva.

4. **Mensajes de error:**

   - Si ocurre un error (como una fecha fuera de rango o problemas de conexión), se muestra un mensaje claro que desaparece al intentar nuevamente.

---

## Tecnologías Utilizadas

- **React.js:**
  - Para el desarrollo de componentes y la gestión de estados.
- **CSS:**
  - Para el diseño y la experiencia de usuario.
- **API de la NASA:**
  - Proporciona los datos y las imágenes necesarias para la aplicación.

---

## Posibles Mejoras Futuras

1. **Paginación en la galería:**

   - Implementar un sistema de paginación para explorar más imágenes.

2. **Compartir en redes sociales:**

   - Agregar opciones para compartir la Foto del Día directamente en redes sociales.

3. **Soporte para videos:**

   - Permitir la visualización de videos si la respuesta de la API incluye contenido multimedia de tipo `video`.

---

## Notas

- Asegúrate de tener una clave válida para usar la API de la NASA.
- La aplicación maneja errores comunes, como fechas inválidas o problemas de red, mostrando mensajes adecuados al usuario.

