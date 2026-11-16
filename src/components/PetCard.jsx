function PetCard({ nombre, especie, edad, descripcion, foto, onAgregar }) {
  return (
    <article className="pet">
      <div className="pet-foto">
        <img src={foto} alt={nombre} />
        <span className="pet-huella">🐾</span>
      </div>

      <div className="pet-info">
        <h3>{nombre}</h3>
        <span className="pet-tag">{especie} · {edad} años</span>
        <p>{descripcion}</p>
        <button onClick={onAgregar}>🤍 Favorito</button>
      </div>
    </article>
  );
}

export default PetCard;