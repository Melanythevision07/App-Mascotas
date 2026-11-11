import FavItem from '../components/FavItem';

function Favoritos({ favoritos, onQuitar }) {
    return (
        <main className='pagina'>
            <h2>Mis favoritos</h2>
            {favoritos.length === 0 ? (
                <p className='vacio'>Aún no tienes favoritos. Agregalos desde el inicio.</p>
            ): (
             <ul className='lista'>
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