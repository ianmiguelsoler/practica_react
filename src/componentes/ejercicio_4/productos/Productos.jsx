import React from "react";
import "./Prodcutos.css";

const Productos = () => {
  const productos = [
    {
      id: 1,
      nombre: "Producto 1",
      descripcion: "Descripción breve del producto 1.",
      imagen: "https://www.holded.com/wp-content/uploads/2020/09/ciclo-de-vida-de-un-producto-4.png",
    },
    {
      id: 2,
      nombre: "Producto 2",
      descripcion: "Descripción breve del producto 2.",
      imagen: "https://img.freepik.com/fotos-premium/concepto-presentacion-producto-cafe_948175-686.jpg",
    },
    {
      id: 3,
      nombre: "Producto 3",
      descripcion: "Descripción breve del producto 3.",
      imagen: "https://todoanimal.es/cdn/shop/products/33872.jpg?v=1712826737&width=533",
    },
  ];

  return (
    <>
      <h2>Listado de Productos</h2>
      <div className="contenedor-productos">
        {productos.map((producto) => (
          <div key={producto.id} className="producto">
            <img src={producto.imagen} alt={producto.nombre} className="imagen" />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <button className="boton">Añadir al carrito</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Productos;
