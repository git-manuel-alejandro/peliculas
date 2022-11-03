import React, { useState } from "react";

export const Crear = () => {
  //   const [titulo, setTitulo] = useState("");
  //   const [descripcion, setDescripcion] = useState("");
  const [peli, setPeli] = useState({});

  const guardarLocalStorage = (newPeli) => {
    const data = JSON.parse(localStorage.getItem("peliculas"));
    if (Array.isArray(data)) {
      data.push(newPeli);
      localStorage.setItem("peliculas", JSON.stringify(data));
    } else {
      localStorage.setItem("peliculas", JSON.stringify([newPeli]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let id = new Date().getTime();
    let titulo = e.target.titulo.value;
    let descripcion = e.target.descripcion.value;

    const peli = { id, titulo, descripcion };
    setPeli(peli);

    guardarLocalStorage(peli);
  };
  return (
    <>
      <div className="add">
        <h3 className="title">Añadir Peliculas</h3>
        {peli.titulo &&
          peli.descripcion &&
          `Pelicula incregada: ${peli.titulo}`}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Titulo"
            name="titulo"
            // value={titulo}
            // onChange={(e) => {
            //   setTitulo(e.target.value);
            // }}
          />
          <textarea
            placeholder="Descripcion"
            name="descripcion"
            // value={descripcion}
            // onChange={(e) => {
            //   setDescripcion(e.target.value);
            // }}
          ></textarea>
          <button type="submit">Guardar</button>
        </form>
      </div>
    </>
  );
};
