import FavItem from '../components/FavItem';

function Favoritos({ favoritos, onQuitar }) {
    return (
        <main className='pagina'>
            <div className="pagina-encabezado">
                <p className="hero-eyebrow">Tu familia puede crecer</p>
                <h1>Mis favoritos</h1>
            </div>
            {favoritos.length === 0 ? (
                <p className="vacio">Aún no tienes favoritos. Agrégalos desde el inicio.</p>
            ) : (
                <ul className="lista">
                    {favoritos.map((m) => (
                        <FavItem
                            key={m.id}
                            nombre={m.nombre}
                            especie={m.especie}
                            edad={m.edad}
                            descripcion={m.descripcion}
                            onQuitar={() => onQuitar(m.id)}
                        />
                    ))}
                </ul>
            )}
        </main>
    );
}

export default Favoritos;