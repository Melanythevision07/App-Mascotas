import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Favoritos from './pages/Favoritos';
import './App.css';

function App() {
  const [pantalla, setPantalla] = useState('inicio');
  const [favoritos, setFavoritos] = useState([]);

  const agregar = (mascota) => {
    setFavoritos([...favoritos, mascota]);
  };

  return (
    <div className="app-container">
      <Navbar total={favoritos.length} irA={setPantalla} />

      {pantalla === 'inicio' ? (
        <Inicio onAgregar={agregar} />
      ) : (
        <Favoritos favoritos={favoritos} />
      )}

      <Footer />
    </div>
  );
}

export default App;