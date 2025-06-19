import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Work Flow</h1>
        <p>Aplicación para la gestión y automatización de tareas</p>
        <a href="#features" className="cta-button">Ver más</a>
      </header>

      <section id="features" className="features">
        <h2>Características Principales</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>Automatización</h3>
            <p>Realiza tareas repetitivas de forma automática.</p>
          </div>
          <div className="feature">
            <h3>Colaboración</h3>
            <p>Comparte proyectos y trabaja en equipo fácilmente.</p>
          </div>
          <div className="feature">
            <h3>Despliegue</h3>
            <p>Implementación rápida con GitHub Pages y Actions.</p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>Sobre este proyecto</h2>
        <p>
          Este proyecto fue desarrollado como parte de la materia <strong>Desarrollo Web Integral</strong>.
        </p>
        <p>
          Creado por: <strong>Ana Gabriela Contreras Jiménez</strong>
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Work Flow | Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
