import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Passlist from './pages/Pass-list'
import PasswordShow from './pages/PasswordShow'
import AddPassword from './pages/AddPassword'
import EditPassword from './pages/EditPassword'
import Home from './pages/Home'


function App() {
  return (
    <BrowserRouter>
      <div className='total-page'>
        <main>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Passlist />} />
            <Route path='/password/add' element={<AddPassword />} />
            <Route path='/password/:id' element={<PasswordShow />} />
            <Route path='/password/edit/:id' element={<EditPassword />} />
            <Route exact path='/password' element={<PasswordShow />} />
            <Route exact path='' element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
