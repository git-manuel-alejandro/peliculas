export const Listado = ({ peliculas, cargando }) => {
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
