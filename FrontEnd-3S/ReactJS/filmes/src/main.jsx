import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {UsuarioProvider} from './context/UsuarioProvider'
import './style/DarkTheme.css';

const root = createRoot(document.getElementById('root')).render(
  <StrictMode>

    <UsuarioProvider>
      <App />
    </UsuarioProvider>

  </StrictMode>
)
