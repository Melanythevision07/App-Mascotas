import { useState } from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from "./pages/Inicio";
import Favoritos from "./pages/Favoritos";


function App() {
    const [pantalla, setPantalla] = useState('inicio');
    const [favoritos, setFavoritos] = useState([]);

    function agregar(mascota) {
        setFavoritos([...favoritos, mascota]);

    }

    function quitar(id) {
        setFavoritos(favoritos.filter((m) => m.id !== id ));
    }

    return (
        <>
            <Navbar total={favoritos.length} pantalla={pantalla} irA={setPantalla}/>
            {pantalla === 'inicio' ? ( 
               <inicio favoritos={favoritos} onAgregar={agregar}/>
            ) : (
                <favoritos favoritos={favoritos} onQuita={quitar}/>
            
            )}    
        </>
    );
}

export default App;