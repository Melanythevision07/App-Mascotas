import { useState } from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from "./pages/Inicio";
import Favoritos from "./pages/Favoritos";


function App() {
    const [pantalla, setPantalla] = useState('inicio');
    const [favoritos, setFavoritos] = useState([]);

    function agregar(mascota) {
        setFavoritos((actuales) => [...actuales, mascota]);
    }

    function quitar(id) {
        setFavoritos((actuales) => actuales.filter((mascota) => mascota.id !== id));
    }

    return (
        <div className="app-shell">
            <Navbar total={favoritos.length} pantalla={pantalla} irA={setPantalla} />
            {pantalla === 'inicio' ? (
                <Inicio favoritos={favoritos} onAgregar={agregar} />
            ) : (
                <Favoritos favoritos={favoritos} onQuitar={quitar} />
            )}
            <Footer />
        </div>
    );
}

export default App;