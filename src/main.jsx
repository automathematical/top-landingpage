import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Components/Experience.jsx'
import { Overlay } from './Components/Overlay.jsx'
import { Leva } from 'leva'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Experience text={'more coming soon!'} />
    <Overlay />
    <Leva hidden />
  </React.StrictMode>
)
