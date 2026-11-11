function Navbar ({total, pantalla, irA}) {
    return (
        <nav className="Navbar">
            <span className="logo">Huella Amiga</span>
            <div className="links">
                <button
                className={pantalla === 'inicio' ? 'activo' : ''}
                onClick={() => irA('inicio')}
                >
                
                    Inicio
                </button>
                <button
                    className={pantalla === 'favoritos' ? 'activo': ''}
                    onClick={()=> irA('favoritos')}
                >
                    Favoritos ({total})
                </button>
            </div>
        </nav>
    );
}

export default Navbar;