import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Components/Experience.jsx'
import { Overlay } from './Components/Overlay.jsx'
import { Leva } from 'leva'

import './index.css'
import ReactGA from 'react-ga4'
ReactGA.initialize('G-WR3E9BJWNP')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Experience />
    <Overlay />
    <Leva hidden />
  </React.StrictMode>
)
