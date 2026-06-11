import './App.css';
import './style/DarkTheme.css';
import { Rotas } from './routes/routes';
import { useState } from 'react';
import './style/DarkTheme.css';

function App() {

  const [temaEscuro, setTemaEscuro] = useState(
    localStorage.getItem("tema") === "dark"
  );

  const trocarTema = () => {

    const novoTema = !temaEscuro;

    setTemaEscuro(novoTema);

    localStorage.setItem(
      "tema",
      novoTema ? "dark" : "light"
    );
  };

  return (
    <div className={temaEscuro ? "dark-theme" : "light-theme"}>

      <button
        className="btn-tema"
        onClick={trocarTema}
      >
        {temaEscuro ? "☀️" : "🌙"}
      </button>

      <Rotas />

    </div>
  );
}

export default App;