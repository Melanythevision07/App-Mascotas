import Hero from '../components/Hero';
import PetCard from '../components/PetCard';
import {mascotas} from '../data/mascotas';

function Inicio({favoritos, onAgregar}) {
    return (
        <main>
            <Hero />
            <section className='cards'>
                {mascotas.map((m) => (
                    <PetCard
                        key={m.id} // <-- Corrección aquí
                        nombre={m.nombre}
                        especie={m.especie}
                        edad={m.edad}
                        descripcion={m.descripcion}
                        esFavorito={favoritos.some((f) => f.id === m.id)}
                        onAgregar={() => onAgregar(m)}
                    />
                ))}
            </section>
        </main>
    );
}

export default Inicio;