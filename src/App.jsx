import React from 'react'
import { Routes, Route } from 'react-router-dom';
import CivilizationDetailView from './Views/CivilizationDetailView';
import CarouselView from './Views/CarouselView';
import './App.css'

function App() {

  return (
   <>
     <Routes>
       <Route path='/:lang?' element={<CarouselView />} />
    
       <Route path='/:lang/civilization/:civilizationName/*' element={<CivilizationDetailView />} />
       <Route path='*' element={<div>404- Contenido no encontrado</div>} />
     </Routes>
   </>
  )
}

export default App
