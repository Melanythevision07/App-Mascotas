// Componente de barra de navegación que recibe el total de favoritos y la función para cambiar de pantalla
function Navbar({ total, irA }) {
  return (
    <nav className="navbar">
      <span className="logo">HuellaAmiga</span>
      <div className="links">
        <button onClick={() => irA('inicio')}>Inicio</button>
        <button onClick={() => irA('favoritos')}>Favoritos ({total})</button>
      </div>
    </nav>
  );
}

export default Navbar;