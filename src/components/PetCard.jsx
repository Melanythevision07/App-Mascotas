function PetCard({ nombre, especie, edad, descripcion, esFavorito, onAgregar }) {
    return (
        <article className="card">
            <div className="foto" aria-hidden="true">{nombre.charAt(0)}</div>
            <h3>{nombre}</h3>
            <p className="detalle">{especie} · {edad} {edad === 1 ? 'año' : 'años'}</p>
            <p>{descripcion}</p>
            <button onClick={onAgregar} disabled={esFavorito}>
                {esFavorito ? 'En favoritos' : 'Agregar a favoritos'}
            </button>

        </article>
    );
}

export default PetCard;