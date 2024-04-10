import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Components/Experience.jsx'
import { Overlay } from './Components/Overlay.jsx'

import { Leva } from 'leva'

import './index.css'
import GoogleAnalytics from './Components/GoogleAnalytics.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleAnalytics />
    <Experience />
    <Overlay />
    <Leva hidden />
  </React.StrictMode>
)
