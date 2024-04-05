import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import avatarJessica from "../public/avatar-jessica.jpeg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="cuadro">
        <div className="Imagen">
          <img src={avatarJessica} />
        </div>
        <div className="titulo">
          <h2>Jessica Randall</h2>
          <h4>London, United kingdom</h4>
          <p>"Front-end developer and avid reader."</p>
        </div>
        <div className="botones">
          <button>GitHub</button>
          <button>Frontend Mentor</button>
          <button>LinkedIn</button>
          <button>Twitter</button>
          <button>Instagram</button>
        </div>
      </div>

    </>
  )
}

export default App
