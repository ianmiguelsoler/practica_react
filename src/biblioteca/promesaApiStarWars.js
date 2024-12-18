// Función genérica para realizar fetch con soporte para finally.
const fetchConFinally = async (url, onFinally = () => {}) => {
  try {
    // Realiza una solicitud a la URL proporcionada.
    const response = await fetch(url);

    // Verifica si la respuesta es exitosa (status 200-299).
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    // Intenta convertir la respuesta en JSON.
    const data = await response.json();

    // Devuelve los datos obtenidos de la respuesta.
    return data;
  } catch (error) {
    // Registra en la consola cualquier error que ocurra durante la solicitud.
    console.error(`Error en fetchConFinally: ${error.message}`);

    // Lanza el error para que pueda ser manejado en otro lugar.
    throw error;
  } finally {
    // Ejecuta la función proporcionada en `onFinally`, si existe.
    // Esto se ejecuta independientemente de si la solicitud tuvo éxito o falló.
    onFinally();
  }
};

// Función para cargar múltiples recursos.
const fetchMultiplesRecursos = async (urls, onFinally = () => {}) => {
  try {
    // Mapea las URLs proporcionadas y llama a `fetchConFinally` para cada una.
    const promesas = urls.map((url) => fetchConFinally(url));

    // Usa `Promise.allSettled` para esperar a que todas las solicitudes se completen,
    // independientemente de si tuvieron éxito o fallaron.
    const resultados = await Promise.allSettled(promesas);

    // Procesa los resultados de las promesas.
    return resultados.map((resultado) => {
      if (resultado.status === "fulfilled") {
        // Si la promesa se resolvió correctamente, devuelve su valor.
        return resultado.value;
      } else {
        // Si la promesa fue rechazada, registra el error y devuelve `null`.
        console.error(`Error al cargar recurso: ${resultado.reason}`);
        return null;
      }
    });
  } catch (error) {
    // Registra en la consola cualquier error que ocurra durante el procesamiento de las promesas.
    console.error(`Error en fetchMultiplesRecursos: ${error.message}`);

    // Lanza el error para que pueda ser manejado en otro lugar.
    throw error;
  } finally {
    // Ejecuta la función proporcionada en `onFinally`, si existe.
    // Esto se ejecuta independientemente de si las solicitudes tuvieron éxito o fallaron.
    onFinally();
  }
};

export { fetchConFinally, fetchMultiplesRecursos };
