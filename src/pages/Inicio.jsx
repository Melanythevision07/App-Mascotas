// Importamos la lista de mascotas desde el archivo de datos.
import { mascotas } from '../data/mascotas';

// Importamos los componentes visuales que se usarán dentro de esta vista.
import Hero from '../components/Hero';
import PetCard from '../components/PetCard';

// Este componente representa la pantalla de inicio.
// La prop onAgregar llega desde App y permite guardar una mascota como favorita.
function Inicio({ onAgregar }) {
  return (
    <main>
      {/* El encabezado visual de la página. */}
      <Hero />

      {/*
        Aquí se recorren todas las mascotas con .map().
        Cada elemento se representa como una tarjeta.
      */}
      <section className="cards">
        {mascotas.map((m) => (
          <PetCard
            // key es obligatorio en listas para que React identifique cada elemento.
            key={m.id}
            nombre={m.nombre}
            especie={m.especie}
            edad={m.edad}
            descripcion={m.descripcion}
            foto={m.foto}
            // Se envía una función que llama a onAgregar con la mascota actual.
            onAgregar={() => onAgregar(m)}
          />
        ))}
      </section>
    </main>
  );
}

export default Inicio;