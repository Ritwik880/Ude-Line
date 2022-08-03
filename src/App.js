import React from 'react'
import './App.css'
import './About.css'
import './Mentors.css'
import './Form.css'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Mentors from './Components/Mentors'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Form from './Components/Form'
import BookForm from './Components/BookForm'
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/mentors' element={<Mentors />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
        <Route exact path='/form' element={<Form />}></Route>
        <Route exact path='/bookForm' element={<BookForm />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App