function Navbar({ total, pantalla, irA }) {
    return (
        <nav className="navbar" aria-label="Navegación principal">
            <span className="logo">Huella Amiga</span>
            <div className="links">
                <button
                    className={pantalla === 'inicio' ? 'activo' : ''}
                    aria-current={pantalla === 'inicio' ? 'page' : undefined}
                    onClick={() => irA('inicio')}
                >
                    Inicio
                </button>
                <button
                    className={pantalla === 'favoritos' ? 'activo' : ''}
                    aria-current={pantalla === 'favoritos' ? 'page' : undefined}
                    onClick={() => irA('favoritos')}
                >
                    Favoritos ({total})
                </button>
            </div>
        </nav>
    );
}

export default Navbar;