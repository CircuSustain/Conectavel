import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'

import Section4 from './components/Section4.jsx'
import Section5 from './components/Section5.jsx'
import Section6 from './components/Section6.jsx'
import Footer from './components/Footer'
import Inicio from './components/Inicio'
import ComoFunciona from './components/ComoFunciona'
import NosEscolher from './components/NosEscolher'
import ExpandedNavContext from './context/ExpandNavContext.jsx'

function App() {
  const [expand, setExpand] = useState(false)

  return (
    <ExpandedNavContext.Provider value={{expand, setExpand}}>
      <Nav/>
      <Inicio/>
      <ComoFunciona/>
      <NosEscolher/>
      <Section4/>
      <Section5/>
      <Section6 />
      <Footer />
    </ExpandedNavContext.Provider>
  )
}

export default App