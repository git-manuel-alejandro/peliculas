import React, { useState, useEffect } from "react";

export const Listado = () => {
  const [cargando, setCargando] = useState(true);
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await JSON.parse(localStorage.getItem("peliculas"));
      if (Array.isArray(data)) {
        setPeliculas(data);
        setCargando(false);
      } else {
        setCargando(false);
      }
      // console.log(data[0]);
    };

    getData();
  }, []);

  if (cargando) return "Cargando...";

  if (peliculas.length <= 0) return "No hay peliculas";

  return (
    <>
      {peliculas.map((e) => {
        return (
          <article className="peli-item" key={e.id}>
            <h3 className="title">{e.titulo}</h3>
            <p className="description">{e.descripcion}</p>
            <button className="edit">Editar</button>
            &nbsp;
            <button className="delete">Eliminar</button>
          </article>
        );
      })}
    </>
  );
};
