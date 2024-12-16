// Función genérica para realizar fetch con soporte para finally.
const fetchConFinally = async (url, onFinally = () => {}) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error en fetchConFinally: ${error.message}`);
    throw error;
  } finally {
    onFinally();
  }
};

// Función para cargar múltiples recursos.
const fetchMultiplesRecursos = async (urls, onFinally = () => {}) => {
  try {
    const promesas = urls.map((url) => fetchConFinally(url));
    const resultados = await Promise.allSettled(promesas);
    return resultados.map((resultado) => {
      if (resultado.status === "fulfilled") {
        return resultado.value;
      } else {
        console.error(`Error al cargar recurso: ${resultado.reason}`);
        return null;
      }
    });
  } catch (error) {
    console.error(`Error en fetchMultiplesRecursos: ${error.message}`);
    throw error;
  } finally {
    onFinally();
  }
};

export { fetchConFinally, fetchMultiplesRecursos };
