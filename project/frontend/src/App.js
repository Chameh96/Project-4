import React from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'


function App() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/password/') // * <-- replace with your endpoint
      console.log(res.data)
    }
    getData()
  })

  return (
    <BrowserRouter>
      <div className='total-page'>
        <main>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </main>
      </div>
    x</BrowserRouter>
  )
}

export default App
