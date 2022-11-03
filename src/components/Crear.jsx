import React, { useState, useEffect } from "react";
import { guardarLocalStorage, getData } from "../helpers/guardarLocal";

export const Crear = ({ setPeli, peli }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    let id = new Date().getTime();
    let titulo = e.target.titulo.value;
    let descripcion = e.target.descripcion.value;

    const peli = { id, titulo, descripcion };
    setPeli(peli);

    guardarLocalStorage("peliculas", peli);
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
