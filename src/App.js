import { useEffect, useState } from "react";
import { getData } from "./helpers/guardarLocal";

import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [peli, setPeli] = useState({});
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setPeliculas(getData());
    setCargando(false);
  }, [peli]);
  return (
    <>
      <div className="layaout">
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>
          <h1>Mis Peliculas</h1>
        </header>

        <nav className="nav">
          <ul>
            <li>
              <a href="/#">Inicio</a>
            </li>
            <li>
              <a href="/#">Peliculas</a>
            </li>
            <li>
              <a href="/#">Blog</a>
            </li>
            <li>
              <a href="/#">Contacto</a>
            </li>
          </ul>
        </nav>

        <section className="content">
          <Listado peliculas={peliculas} cargando={cargando} />
        </section>

        <aside className="lateral">
          <Buscador />

          <Crear
            peli={peli}
            setPeli={setPeli}
            peliculas={peliculas}
            setPeliculas={setPeliculas}
          />
        </aside>

        <footer className="footer">
          &copy; Review React <a href="#">manuelroa.com</a>
        </footer>
      </div>
    </>
  );
}

export default App;
