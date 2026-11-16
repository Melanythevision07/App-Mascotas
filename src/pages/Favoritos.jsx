// Este componente recibe la lista de mascotas favoritas como prop.
// La prop favoritos viene desde App y contiene los elementos agregados por el usuario.
function Favoritos({ favoritos }) {
  return (
    <main>
      {/* Título de la sección. */}
      <h2>Mis favoritos</h2>

      {/*
        Aquí validamos si la lista está vacía.
        Si no hay favoritos, mostramos un mensaje.
      */}
      {favoritos.length === 0 ? (
        <p>Aún no has agregado mascotas a favoritos.</p>
      ) : (
        // Si hay elementos, los recorremos para mostrarlos en tarjetas.
        <section className="cards" id="mascotas">
          {favoritos.map((fav, index) => (
            // key ayuda a React a identificar cada elemento de la lista.
            <article key={index} className="card">
              <h3>{fav.nombre}</h3>
              <p>{fav.especie} · {fav.edad} años</p>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default Favoritos;