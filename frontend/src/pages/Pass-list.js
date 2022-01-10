import { useState, useEffect } from 'react'
import { fetchPasswords } from '../helpers/api'
import React from 'react'
import Passcard from '../components/Passcard'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { removeToken } from '../helpers/auth'
import { useNavigate } from 'react-router'

const Passlist = () => {
  const [inputs, setInputs] = useState([])
  const [pageload, setPageload] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      const passwords = await fetchPasswords()
      console.log('PASSWORDS: ', passwords)
      setInputs(passwords)
      setPageload(true)
      console.log(inputs)
    }
    getData()
  }, [])

  const handleLogout = () => {
    removeToken()
    navigate('/')
  }




  return (
    <>
      { pageload ? 
        <>
          <div className='top-titles'>
            <h1> Ed-crypt </h1>
            <h2> My Passwords</h2>
          </div>
          <div className='bottom-buttons'>
            <Link to={'/password/add/'}>
              <Button className='update-button'>Add a password</Button>
            </Link>
            <Button onClick={handleLogout} className='update-button'>Logout</Button>
          </div>
          <div className='passList'>
            {inputs.map((input) => (
              <div key={input._id} className = 'onePass'>
                <Passcard {...input}/>
              </div>
            ))}
          </div>
        </>
        :
        <></>
      }
    </>
  )
}
export default Passlist