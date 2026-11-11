function FavItem({nombre, especie, edad, descripcion, onQuitar}){
    return(
        <li>
        <span>
            <strong>{nombre}</strong> {especie} {edad} años
        </span>
        <p>{descripcion}</p>
        <button onClick={onQuitar}>Eliminar</button>
        </li>
    )
}

export default FavItem;