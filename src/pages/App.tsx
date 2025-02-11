import React from 'react'
import { Route, Routes } from 'react-router'
import SearchBookDiv from '../components/features/searchBookDiv'
import About from './About'
import Contacts from './Contacts'
import Navbar from '../components/layout/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<SearchBookDiv />}/>
        <Route path='/About' element={<About />} />
        <Route path='/Contacts' element={<Contacts />}/>
      </Routes>
    </>
  )
}

export default App
