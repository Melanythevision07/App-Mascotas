function Hero() {
  return (
    <header className="hero">
      <div className="hero-texto">
        <div className="hero-stats">
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-icono">🏡</span>
            <strong>120</strong>
            <span className="stat-texto">adoptados</span>
          </div>

          <div className="stat">
            <span className="stat-icono">🐶</span>
            <strong>35</strong>
            <span className="stat-texto">esperando hogar</span>
          </div>

          <div className="stat">
            <span className="stat-icono">🐾</span>
            <strong>4</strong>
            <span className="stat-texto">años de trabajo</span>
          </div>
        </div>
      </div>
        
        <span className="hero-etiqueta">🐾 Adopción responsable</span>
        <h1>Encuentra a tu nuevo <span>mejor amigo</span></h1>
        <p>Conoce las mascotas que buscan un hogar.</p>
        <a href="#mascotas" className="hero-boton">Ver mascotas</a>
      </div>

      <img className="hero-foto" src="/mascotas/hero.jpg" alt="Mascota en adopción" />
    </header>
  );
}

export default Hero;