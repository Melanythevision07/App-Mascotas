function FavItem({ nombre, especie, edad, descripcion, onQuitar }) {
    return (
        <li>
            <div className="favorito-info">
                <strong>{nombre}</strong>
                <span>{especie} · {edad} {edad === 1 ? 'año' : 'años'}</span>
                <p>{descripcion}</p>
            </div>
            <button onClick={onQuitar} aria-label={`Eliminar a ${nombre} de favoritos`}>
                Eliminar
            </button>
        </li>
    );
}

export default FavItem;