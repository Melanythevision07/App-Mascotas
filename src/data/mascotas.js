// Este archivo exporta la base de datos simulada de mascotas.
// Sirve como fuente de datos para renderizar tarjetas en la pantalla de inicio.
export const mascotas = [
    {
        // Cada objeto tiene un identificador único para usarlo como key en .map().
        id: 1,
        nombre: "Luna",
        especie: "Perra",
        edad: 2,
        descripcion: "Luna es una perra juguetona y cariñosa que adora correr en el parque.",
        foto: "/mascotas/luna.jpg" // Ruta de la foto de la mascota.
    },

    {
        id: 2,
        nombre: "Milo",
        especie: "Gato",
        edad: 3,
        descripcion: "Milo es un gato curioso y travieso que siempre está explorando su entorno.",
        foto: "/mascotas/milo.jpg"
    },

    {
    id: 3,
    nombre: "Rocky",
    especie: "Perro",
    edad: 4,
    descripcion: "Rocky es un perro leal y protector que disfruta de largas caminatas al aire libre.",
    foto: "/mascotas/rocky.jpg",
},
];