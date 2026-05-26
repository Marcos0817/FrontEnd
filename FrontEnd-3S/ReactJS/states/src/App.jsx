import CicloDeVida from "./components/contador/ciclocretedevida/ciclodevida"
import CadFruta from "./components/contador/cadFruta/cadfruta"
import Contador from "./components/contador/contador"
import { useState } from "react"

function App () {
  //console se o componente será mostrado na tela
  const [mostrar, setMotrar] = useState(true)

// objeto privado
const [nome, setNome] = useState("Google")

function trocarTexto () {
  setNome("Microsoft")
}

function fuiAbandonado () {
  setNome("Input foi abandonado :(")
}

  return (
    <>
      {/* <h1>{nome} Page</h1>
      <button onClick={trocarTexto}>Mudar Texto</button>
      <button onClick={() => {
        return setNome ("Yahoo")
      }}>Mudar Texto</button>

      <br />
      {/* evento - evento disparado: change */}
      {/* target - quem disparou o evento change */}
      {/* valor - valor do input que disparou o evento change */}
      {/* <input 
      type="text" onBlur={fuiAbandonado} 
      onChange={(evento) => setNome(evento.target.value)} 
      /> */}

      {/* <Contador/> */}
      {/* <br /><br /> */}
      {/* <p>Lorem ipsum</p>  */}
      {/* <CadFruta/> */}

      <button onClick={() => {
        setMotrar(!mostrar);
      }}>Mostrar / Ocultar</button>
      {mostrar && <CicloDeVida/>}
    </>
  );
}

export default App