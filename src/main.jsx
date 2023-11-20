import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Components/Experience.jsx'
import { Overlay } from './Components/Overlay.jsx'
import { Suspense } from 'react'

import { Leva } from 'leva'
import { Loader } from '@react-three/drei'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <Experience />
      <Overlay />
    </Suspense>
    <Loader />
    <Leva hidden />
  </React.StrictMode>
)
